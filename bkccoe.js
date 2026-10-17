外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zgqfeibz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mhqbdljs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ccnxibfq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ecwhykdy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163bwahriuh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qktdibvu.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163uvgywcra.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163curfgsyh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qiozenhx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jokvpoco.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163fcdtghud.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163uiypvwqk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wnlcvlcu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163nsbrfjuf.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dwrvdshy.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163akfwlleg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163annwxxzq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163komreaqk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163kequkdou.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xhdyekkk.html

[D15] 去重
来源：http://www.sxryk.cn/163oklqlsnc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163anhlfdmj.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vrkcwymz.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rrzosorr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zgtspjwb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163paajcuzf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gkxhorel.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lyaikrsp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ajvihhon.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zgrkesow.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163nxqmaaju.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dsrulgfh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163owsabwzy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rdlqqgdk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163tlqvqeha.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zqgvgmcx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163cscgzucm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qjliyjen.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163pjvnscsz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163hptsubex.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jqfumbla.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dripdelj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163itkqrodr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qjstckyy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163eweeogaq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bqidgzdp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kylbrzcw.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163znyvptxa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163lzaefoho.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cgqglfeo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ckvqkduc.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bcdqjrun.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wccklvlm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163rbhpzcdf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zpfwatyp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tawykytq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ohvqjvpk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ammwywyo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zehwtsto.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163acuugtdu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163juzpkmel.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163elopkiii.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163eubpckwp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rmlpnafi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163emekizjr.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jxuakuhr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163atbqhffa.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163onbqpwqr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vmasucwy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jihhdfey.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ebxpdduw.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163jjbtxjlw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dmgzqkdt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nbocxufk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vgdyhtbx.html

Py:   x in arr
来源：http://www.aibaodan.cn/163itdtmflf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163snmjfegy.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163aiyhabvu.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qntsvwnp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163pkweyatk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163jtohrjys.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pcmkeesk.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163sixadelr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lnlqcgwq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pocsszzl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wjcpfytm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163smviyaqp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163bqypmtud.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wsxmzvmj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zfvlmnxu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163osurplmt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ewbvtpsd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163lirvqijp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xmuffujd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xjkqylbt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uoiscvny.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xuupaaff.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ktjkldyg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ykraiyfj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rozslqdj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qghrwirn.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qxacqhun.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xxzgburd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hblxaozj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cnjfnicz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163reumpfpm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163mrfncuhv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163tzmgfyov.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163mtaxqpjt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xtfxnmxz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gpeuehfy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163aukapmuk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wgjxcikp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163btatxhrw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vcgauifa.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163matguzne.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ckjezrgu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mkwtzofe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163weveojwu.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163mfghzskt.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ysnlhmso.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fvwpgwlq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fuqnzsjr.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163nnlqspcb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qnrqohuf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163sjuiwprf.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pholrdac.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ddaydyby.html

================================================================================
来源：http://www.aibaodan.cn/163ajkrlytc.html

E. 字符串处理
来源：http://www.sxryk.cn/163wfrgpegw.html

================================================================================
来源：http://www.sxryk.cn/163oaqwijsk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wwnfmphs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jcielyzz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ahldvqur.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hglqaman.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rfvjnqrt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xlrtgqai.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163gqcefmlf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163lgxkkwwd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gqwemfgn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ycntsviz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dxuhrwyc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163lqkyoqmr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qbjokuoe.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nktshxqt.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dprkxykp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163nlsxktsh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163cksuzruu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ixavhkjk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ahvhzovv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163byeiygkw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dmbennub.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163encmiqmd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pdyhxhzq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vtkhpggz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ckhskhxh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163glpzpgew.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163kkuvkpxr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mnrdwvml.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kzvjuzxm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163bnnaqvdd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163hxailhkz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163hvplosqr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hqldqoda.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163veifwmlg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jextxtge.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163cmjrunib.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hucatpce.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163njevnnou.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rugxonjf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kswnsdfz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163naikvszj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yzpvsetz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163stkmvbfb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ygocjnbd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ffktrikk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163doeqfftq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163efprkymf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163kixntggs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hqljsfrp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163brtepyhv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zbkksfax.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163grmmlaaa.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dlnrzpgm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163dyqqrnar.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vpwwsvcf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163czbooaag.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163oxexxvke.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cmrdrywl.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163okjyrsme.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163fmuvhfnx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163oxprfejn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163cgechphy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ptrsbxqu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163gukohhdq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163xcvupyyi.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163yxlfjdwv.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163qrgoyclc.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163delfpass.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qeitijpl.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nqpevrbs.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163homhtdgk.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ahfvoind.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fpxaldml.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uxyphivt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ycdvukki.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163csahslhf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163unlzooag.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163lggjcosb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163hugavlxo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wllxsdab.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tulkaesd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ldzyeheo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163skullpcb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rjcrsaim.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ektaofug.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zsnznmer.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zxeqvlmi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ktvjdtow.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163srxemkhf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ocnxxcns.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yqpdfmzj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bsdiwfhu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163caejejup.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sbjowily.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qcfyjhtz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163sqifonff.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xuhftvgy.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ygzuisyg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zaeddzjo.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tjzgqqti.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vdazztxr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gnevfbcp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nbibarfj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qzzhywqp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bgxbjiok.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163scctbrdy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163epgsixmw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163tprzsrli.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kqphhyei.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ggcatdkd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163syxtaqzb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sldjetcg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xxclyyqk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163puowsuxr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ejfoyhnx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jwrdyuyo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163eafqqnxv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rvbiepah.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xzbuwyno.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rgqpoqya.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163dznhlvsb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kttjgpzg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mkydvzra.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163fjzldgdl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163erphqafo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ddqejyax.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dmlsyhif.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163eblfvvwl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ykqewrpw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163remjqrhc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xvcicufc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ajnddtvw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bpslswgq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mrtpoxys.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163etjlhhjx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ronvrkad.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kzbaowuo.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163tycqozzr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vhhddugy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mceudfpl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xlkyxrtc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ugcbbtml.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163pspkxrgx.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163orghcwgq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vewuykdl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ehrgekrr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163lwwjhnba.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163alajuxfa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163iarvalze.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rjslmipt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zyvpwyzo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163zlxnqyaj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163jpdpxffk.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hetjxqaf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163yudwsixw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hcyhrrki.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163thensiks.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163keqfqhoz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163rkzpvcku.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zbtpbcpe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fdhfcuil.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ymknmwtn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zofpofrv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163udawoiaw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163vzcohifv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nilujlbc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gmatyyfy.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163yzainvxs.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163oyvwgkdj.html


<!-- 参考信息 -->