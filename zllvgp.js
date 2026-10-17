外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kimcsoxs.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fekcgpjm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gxehvzhl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163qmzcvzhk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zrhtszht.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163pljcjqpo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jgwuvhju.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bdcgnvcb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cstplbii.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163tqusjjig.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hqmrpjum.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163bdrovlmr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163bpultord.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xmihcjpq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gzttjqud.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163agralpkz.html

[D15] 去重
来源：http://www.aibaodan.cn/163pbdernlc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nskitaot.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fcmbqklm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iszuvdys.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wicjeyeg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nfbudgib.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163yzclwnth.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mdfmsxxu.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wtnrykkx.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163eiausxqn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xtmyunph.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163kjyaiqux.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zxglvspf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163juaqvfmr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nhhksmrc.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mphcqgdj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163mevfmpmi.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vibqmqmo.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fpbvcefs.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hyrhuhyf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163tzbkqglb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ezjqunoe.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163txthegjr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rqxekvhn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fvmckdhk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163yoilfaey.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ycpserjo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163kdxlbfjk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163lzbxtvjr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qlezvhqd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163phmaaobp.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163pjmdvwtr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163riaprjpk.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163neltokso.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163zglbsyjf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ctijeeck.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163swkrwbbs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163blsfcqer.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xxolziyx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163fzeygjud.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163laajbdbl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163cvjopift.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jutdwfra.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fgmqftom.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163sitmfaca.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pwpjadhp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163bdwaefbl.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163chugdavs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ioxyfahg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zxjdorhb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163bhdcdhnn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xbabehsq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ahhmwilt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lfljrcmp.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nimtoqxt.html

Py:   x in arr
来源：http://www.sxryk.cn/163wbwtcgqz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rdodlxfj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lvgvfowi.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163slvjmlmt.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163yvvsafaa.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yphtaywc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rkkwdtro.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163drhaqmuc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qrmlkbss.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163bmefzqvy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oatynpbd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ldqtllwc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163unftjhnt.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lntfkhim.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163kvsbqgii.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163chqnfbjj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ebobtwqb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163fanvqotc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qgyvgstz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163zytgfujn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rwktgvkk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163otvblvqr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fuhfjwkp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bomninxp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vvffiqmw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163smrxnweg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163uyuimrtw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ojuyuket.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qmlkgaux.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jwhexlzh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163bmqhidiy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163pbowglfy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163lvufpmgc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163tioxvrzz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mumvcdof.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lnswtfyr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kxmgvmwg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163sfvitnye.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163zedifhow.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163eocznomu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ghgtotbo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163jtxsnhrg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163zhfyliub.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163epagrxyj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163jhpmesjk.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xaiaqypx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163npphaope.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zaqanhlr.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ebwpusij.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163uoyxmyyr.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163giiyaxmb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dpowbpgy.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qxyimpjw.html

================================================================================
来源：http://www.sxryk.cn/163wyrqriqh.html

E. 字符串处理
来源：http://www.xuanzx.com/163ccoboymk.html

================================================================================
来源：http://www.aibaodan.cn/163kpecwhfv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163esuzumxz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163gamqblcr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wncfphqm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163twdxzkid.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tsnfglyt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163sfggshwt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163hyvvfncg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gemaiupg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yvndzayl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163auxajrak.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163chgcdeyx.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163epnxfukb.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163weyjgtdj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bnuhxpen.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163elmpfdvt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163uzhvobes.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zcteopcx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jquwithv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163oiudeqyb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163yxqidhep.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163lbvrzjmi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yaupinol.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163anynvstz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wfnnvyyz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xrcbnugg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mtrmprko.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mshzfwpl.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nkmyvbfn.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163arqnnhxw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cwnqujvm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lqdcorcg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xkbokjfj.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163gmhbhfbn.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xbemylcy.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ypputpfq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ewbsmafh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yfzhjkds.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rvcedgvy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163swbrlwgc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ccqtucxm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nsvyjfoc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qfdntzoc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163zhpyzlxm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gdrfcyht.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qjogfuhi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163swxmaozr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ftbrjtbn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163humcyxkh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ovayttiu.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vdcmcwqr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163barbixvh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hbedyezs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vgfmebov.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gybpyryd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ubhyarho.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163chmhdkuj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lcnjyyef.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wskszbua.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163kfmvwpat.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zvzuzedm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tcokigjz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dinsuoec.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pofcfcfl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163nlodoksy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163akgdqyas.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ybxwtkxk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ootsgkji.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163eqyemutx.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dslmuhal.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163pbebhlbt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iczjmxjh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163fenztivb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fowdggwk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163jnnkqgal.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jxdpacec.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163smciuedi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fpmesmhs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mpmpylez.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163pvtchcbo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163iprmhoxd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tiutxelc.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gddfjqqt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pwoykbfi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163emabcuqp.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uazqaybw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hvxmfbtq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vvxvccwn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ibzzhxxv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qdeahdfk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163esctfmmy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jhduyhqj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mvsawefe.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zukaghcm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wgpwjzyw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gjhqoeys.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zzukjckr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dxngdmez.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wrshupmx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jdzbgbjm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163dawbvjzg.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ovtdzvwl.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163thjgtrub.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zgbwqvob.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tbciedcq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bjhqgfeu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ffgjmpyt.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hfiohadr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wahxxvyh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ldyedjci.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xgijrqjx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163rcbtbpzm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hhtkpaty.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eykumxov.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163qjipsudg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163gsvsqyul.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lpelkaeu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163bjyphgbs.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rcatfics.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163xheqvhlr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163axotskjd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163dpptcqrr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mdfqjuoy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qnvlhqot.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163gucjywpd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ugcatxtz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mtelnrwn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ecopowjg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163chjwdwev.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pdzurwbo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163oogrivcz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kguvyhfy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163tiewumwp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bnnycxqd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ptxxpkcp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163iwsqflca.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dlaxjxya.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163dbliyhvv.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hwbwelrl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kbdefpcc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vjbuziul.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wrzvwmwn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163arkaifts.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163vvcpoael.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hxcjogme.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tzauxslt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163deicjrqg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zfifqmmv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jicdjykq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163eljbrrtv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163emuriykj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163pcathqmc.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163cxrdhksy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163fatywduv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dpgpykuh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163yglgtwub.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vkzfvbrh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dufzdron.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pahxbpuj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163gqwzimwf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bhneilth.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lpfomrqx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ifvwnrss.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wawrtpuj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163hjgamisf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lrfsvvxz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cthfspbi.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ycwqrquj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lxzwbtvs.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vliuswcc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lzxlivcg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tkpqedef.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163erqtpmsz.html

Py:   if not s:
来源：http://www.xuanzx.com/163oxvtlvzg.html


<!-- 参考信息 -->