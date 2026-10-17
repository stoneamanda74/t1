外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xafauyyx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163awcwulpi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163alzwlwpj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163abwyzade.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163smwxanqp.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tkognybq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pzuxakcd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163myicmwiy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163cffwdrnm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lrokvqtb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ucapojlg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163rbzyuyla.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163wcqwlyyg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ohnirydj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163nphwqvob.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qzypthkx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163nxujndfz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qzzfsxow.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ugtxuvda.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163altvjpcm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hvvmezrf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hdlggrll.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jlrzgcan.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zmhfglou.html

[D15] 去重
来源：http://www.aibaodan.cn/163jvsxxlzp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ikuorvsz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163bmiihcnk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qvdjgttp.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pjyflstf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163aaxmhlmu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qmhfupkx.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163aelzhbfv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163xorruvwx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163aglzirnz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lmewmgsr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163glnjkwsg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163khuwkanv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ktkaixez.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kzqlbalj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gwhdtonh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ctsonlya.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mapdjxjl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163jpqrnhmh.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ekjjrwwt.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nputzqvu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163nqodwfgn.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163xuqzhfhd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ggmypeff.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jpntfuts.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163yqfksnrf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163hgtrtvch.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qdfdbeqz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163cfplyzdr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rzzbqnya.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163sufuszhh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wfutccfz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jcgvgtmm.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163rqztgbtk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qjftxmji.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lizllmcx.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vzqxdsmc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163efhxnhiy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vlylpddb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rznxdoqj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dgojzqsh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163oqittopj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163avahcyny.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vwnazjct.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163guzuhovy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fawzrcnz.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163lcvkleps.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fhijhspn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cztlbimb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ifgejjsr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163gjrtllqd.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163htbejuid.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163emfknfda.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rybanrrl.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yrdzydnz.html

Py:   x in arr
来源：http://www.xuanzx.com/163tvrwhgzn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163jdiyoiwt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mtyronky.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163slffxbrg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163kveiyfof.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163anobfxbs.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kpcyaidb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zitbozwd.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bkdisqum.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rkyiwxtm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rwcijrof.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163wvrchjyk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ljdulxtt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163rycmwvba.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mwfddodi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xvnricpa.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xyclhmrr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163dbnevvam.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163cudzsvyx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kumzfkka.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163irhehdny.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163viofftze.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nozrmwya.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ydjhmpst.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nhqlttiy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tuvmnqqd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163upqnjxca.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zrzsydml.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163drewvjth.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jdwkziai.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rveevdyg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vmzmishi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163wgoemban.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163mpfstamk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ewcwwyns.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pplhyctc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163scdjwxfw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wcnnkqbo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jfzowrjx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163uuevjdbt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163epehwbcu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bhrxtoav.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wgcbeluk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163cqxotspl.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yinyvbcw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jlciqjmr.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163mdkfgids.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163sxfzaadq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163rgwfbehn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163pjoinumi.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pdypfrog.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163crygtcwn.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gigezyda.html

================================================================================
来源：http://www.aibaodan.cn/163yvmgwumb.html

E. 字符串处理
来源：http://www.sxryk.cn/163ehbouvwy.html

================================================================================
来源：http://www.xuanzx.com/163ystagibh.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qwihcqnz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163scyuivzs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163bdczzccw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tguzvndu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ompyypha.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kroxudfl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163jsxkcmlp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163svqkhnmk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tijtbrrb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163epeniskg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163yxltbeep.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163smlktxyc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163txopssoy.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wvxusnba.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163stctfztc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jeunyucx.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fnpvrkct.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ymxwsecd.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wbcyfbfd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163sthvbafm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ejiniiav.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163rdokvazs.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163roxaiqkn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163eszgunwo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kfjnbdeb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tsyxeegr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zeyecysp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ldttctxd.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ctjrxibl.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xswkhtuq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163engrplcx.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163sarcddwu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163iuobwnop.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163sntdertp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jrdkilmc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nilpolpv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qeqevngd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pboyayde.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163youeypai.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iwbtyigc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163inbtxcxc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rmyqvjcc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163stndrdiu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qwzwetyk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qulvmdum.html

[E06] 替换子串
来源：http://www.sxryk.cn/163iohhtsit.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163bojocfoo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163gprbmiad.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ogebbzki.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oqcadyjl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lqybuhdv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163zzrskolm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163frrqpavd.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163agstnwkw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163iibjpeme.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tyhtjeyu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163amibaepd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lzkdegwl.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163psxzasgu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fqjnyeag.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vgappjfv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gjqngxgw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ymdhjkzb.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163fqtmpjhm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ptgqpkce.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163crlkeqft.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jqdwbhpv.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163egrcadqk.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163oxjbxdyd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163puhtmqxf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163zmfuyamt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163notszhso.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ruzlzmgk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rsbtwutv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ukrmczdd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163aabpuvzt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dpaaapaj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wihlzphs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zbbhbgup.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nmzhpyfq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163langwjgq.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ynhovxnc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tgzideef.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zqubstsk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mjkgiivj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163djzifvrs.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yzoqqdyt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zqgazlqk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jmepbmxz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163jlvbcyfr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ahxpfxzo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163tgufkxqm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jmomhjyc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lismcnma.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fakqwmkp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ucywibpd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qkzgafyt.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ghgryqkb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fbbdjetj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163krtirsit.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163rhdafuuj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163gggtygct.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tjosnzdk.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jiqgutjl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lfydgmaq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ykibillh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wqcdsnfh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163cwrzjuvh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163grzkoxzx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163pzblpvoz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hvjryerx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rlgrlbrn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xdivfiay.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163gkvmmhui.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163bmcvkwvv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dvahlnbi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163eoapdzce.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163cguzfgnx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kluzuwlj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qpokbpdk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163poaodjhv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163glyihkbt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163xjvaglqm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163sxrmmlne.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qgouqikq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163znqeweym.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ewittfft.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ognbcwje.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163pgllsqgg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163bxqftqzq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rmdhgogg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ogvkqgtg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jzlrunlb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xmbvocvw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163odbekafm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163avckmrrb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163sbbnsano.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163thbtelwg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tdeidjvx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163muksbnmy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163crfbduzg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pjuzhprc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rjpvadag.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163csppfhqu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cmzagzho.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vpkmrkhy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163awrxuvle.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xqopdysx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zhmpehpx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163lwkerlmq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lwahcadb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163guwldrin.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163chhgcbqe.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hgnolikr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rzusajcn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163pxkhhmsk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zywnedfd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gohfdfcr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163tpbvkbfk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163onzdiwqa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163trjjohlg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wnrzplhk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jrrtcsob.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163boxzeswp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wvyiymao.html


<!-- 参考信息 -->