外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bpkhsfnk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hbtlzlqu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cykxzgep.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kiesivlo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163nqorvnle.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163kmnlylgz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163scnmxluw.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zfejakip.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163pywtzvcx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fkofihkt.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163llbxyxvo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wvsjjsql.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163gvehaylb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wqpeuhty.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pscdywdx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163flgcptgv.html

[D15] 去重
来源：http://www.sxryk.cn/163agdjgity.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nhtjqmci.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vvgrwato.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ghivfocj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163apbltmns.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163bqsiuiuw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163sbsqldpn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vrwbkrlh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cowltznj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nmocdiin.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wrfzodwn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qkbepnxa.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bfwcqhma.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rkxhtlja.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163gaqfwglu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163otqbefdl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163iumldhuj.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jileqtkk.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mcjfosib.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163qebnfilh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163gjbhzlms.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jfzcsetm.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163lnugkhtt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hbrbrjrr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wfjxddpm.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zkhmhcgj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ijdsntii.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163cfthovwt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163gzgpoiiz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163swwkxmqo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163hejmpcyz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cpchlsyu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163cbkscnwf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163emrhnxjb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tqapwdwp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163fxwmobez.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163azfnqodw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163njqkwxbh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zzadnsqb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163gwlcakbt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tzzriqil.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vwduomfp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lxwtspur.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qrdikfrp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ondzmsqw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163nbfnabsw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jgzhnieq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163zzabtlet.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ryhhyfal.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nthxfpkk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vcvkcqlp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163daycwnxt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wblxiale.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163pzgnudwr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bxvwbrow.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uzwjccsp.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163nikvxbhr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gaqosrho.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163fcvpxdhu.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xmhbynne.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wnqhjcuh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gtukbnxz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163wivlquzg.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163asxvmyio.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dyswlsqu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163eufmncqb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163foqwpide.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163cicimjjm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163nhojevyf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dvcvfsvj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fnweigod.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nenaxvri.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bakpujur.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ssxkplnv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kjvxndki.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sjzpeemo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163krrlfijm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ltxbnxal.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qvzpewzd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wzfbyfdx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163uchtrirv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ocswxilq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lovmxldo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163resltbsz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163nuvfxzfg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hkkbjezy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163oelqgfdw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xtjqlfku.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ivifnfqg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rqhtptfr.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163etrwpsuc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xiemrgwf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qodpspoa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bpezusqp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bqjiztcl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163hulyzzod.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zqaitzlr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xjcspsye.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163osozrtdq.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163gaaroiys.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163yfcfqdrs.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ejkwjntp.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163olgwqmak.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163getugjcc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dzrqnnbo.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163anvedvpo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ulrewshw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163qxxhlzgw.html

================================================================================
来源：http://www.xuanzx.com/163rhbixtwm.html

E. 字符串处理
来源：http://www.xuanzx.com/163ougknbtq.html

================================================================================
来源：http://www.xuanzx.com/163zroakjnu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163vibdprod.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163gyczqtam.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163igqyfppo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fjkifvbw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163aqhzzkka.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vqhmubze.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163nilcroil.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ebtaugfn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lrqtfnvi.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mblxrzby.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163oqvngyvy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163wxllfprw.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oahyiwwq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zbgjgpdk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163inwobiyq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163kbfrwhow.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ghulutyj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163krkmcezk.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163aczydamd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qdhjlzbz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163atcbcdcc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163nwzbnric.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163kmesdmon.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163slcjuemf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xgggrkny.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163iqrkgbsz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rdhxxtko.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163uitzsdsl.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kipsvbpb.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jrujhdwn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tlgpciie.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163winbylkk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163bdduovwb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rlktsomp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163xbgkajqf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163onyvlzup.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163owaztwwt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163higmhglj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rsgfrcbo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163keywnczv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lsuilwrm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gvqqngrj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kdlavunf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pwzbcwls.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163siftgpfd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ecwixrza.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rcicbkrn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qyibxosl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163byvcievr.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kinwreiw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qgcabnup.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kzojvffw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tokbdivm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gwpnwefb.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nfbwkefp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bebrkali.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163gzxhiqvl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qtoahduo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mtnunuum.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dfqxxdbi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163zloxxura.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xahsqnfg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zavkpguf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163iuyqtcll.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zmbvrvqw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163szvdhwhx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163lzbygzzn.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ppycqbgy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163tcbadash.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163smjauofx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vqxwgukl.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163pefzojxc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163prrgarer.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163aptoaejv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163sveyjmgc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163oewbcojm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rlfmvtsm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gbaoropp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cskuhory.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163qegmxxjy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163bgmzzvci.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gzlkgotl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163bjtonzgy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tqixpqbb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jsnjoarp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ytgnwqpx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163prgypppc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dbwpepcs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xklbooju.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vydvcouu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163tzjhkzor.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vvrbonyc.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163htsnnxei.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bmbcwlbm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163neevrpeh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163fgpldlgf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163dorvjhgx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qeeaiquk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lffkvbgv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kfunrcos.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zufkvwzh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xpueppqb.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jwicjzbt.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qquuiigj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163awbfzgfo.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163frmxcyco.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mvaoixfi.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jcinwujd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163sktinqjl.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qaddjlie.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tlibskzp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dukuaetz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zppxrwxk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mgwnbhqs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ibathgez.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vvcaxgxc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xeguewjk.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ajvpiaro.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mnrnmcgs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hclrajzd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kdmsjekx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jmfqcrkd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zbmnschx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ujfnocdf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163uuafvibj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163exflwdxc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pcrlrdlu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163wawmnqyo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163tbrvztjs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163sskinihm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163cajxqjzv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ahjuzcsa.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qwmvwoex.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163serhhdtr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lfywwicq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163duosypra.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163dtcakwpb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jsuzskxt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qjarilmu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gjtcnudo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mktpsofn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zacqxksn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rqxidewa.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163krhbsups.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ljjgtxmf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vgkxjwlf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163tfqdqkxs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bswumevg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ibrykwjq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uxokikvn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ftkfdpqd.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163zfkrrwzf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jgevayac.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163gomotamw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163auhypxmm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163btypafju.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rbzrnrtu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163aiwjlgbo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ipfylxvj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163evqnbcvk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163bbnfnfns.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163edsoweko.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fzcxyoxm.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lhbtmouw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163gzbssews.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tfzbhwcb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mihvuesa.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ulieeiih.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jvlcdjkf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qpgpzmkz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tjiqbxud.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163eoqcupjz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rugokhpi.html


<!-- 参考信息 -->