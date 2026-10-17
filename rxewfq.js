外链999!wailian999！

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zzpwwjwn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163bdrtejcl.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rfjjxgvk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rkzojlst.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kohltzms.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ccquqywp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163eyfylkfg.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ijmvgcow.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163enadblfs.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163apwtgvrt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qsqxctmb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163iwltwrbp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xacezozk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rovnjcyb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mlbypxiv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dxnhbqql.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ndkxqsaq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jyalevai.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fbwdvhwp.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163dlquxnkx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lfjzgsiv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pgbecnwz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ddubustt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xgdwbnno.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mrbtvits.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gnyfgjgb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bdlimcaw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163eakjduvt.html

[D15] 去重
来源：http://www.sxryk.cn/163tfhoibaw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kkukzusm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ctwmqfko.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yiszxnyf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qppxttzc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vfxkragk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163snoquzth.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nphdlwjb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163elgqqxti.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nvojsewp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zuczkrtu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jdqtcyhl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163onhncyfv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bmcrzeua.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vyskowgi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163cpgytibr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163cuclzfnr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163uwyqaeeo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163cgcdxlsl.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163zmbpvmqg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163knmdefyd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ehomxbxe.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dkpyscqj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163obdxgnkz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gobrzmau.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163sgkljgsm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163sdknovvb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163cbybcrtv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163lzfuxmyx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cwjjvqmy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rcinxewh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rrqlfcud.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163hdeiyygx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163svibezma.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ujithgfn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163onhborim.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163rqrqhnqn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ucdhqmld.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163siqrgxyz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163odfdjlsl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163wtyaactf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163cvvyzlqw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163chukzapv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163pwtjxbeb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163opeqdufc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163taxrrbet.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qzszxcdq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163hxvcujgv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163snayajcx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163egvtklsm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163yqtzlzlr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163anxekwkd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163cptqccjj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163flfgcxez.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ymruzuxe.html

Py:   x in arr
来源：http://www.sxryk.cn/163nuydhayi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wzntosnd.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163anyrgsgc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rrvvrdnb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163reptzfzk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cvwrfdtx.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dnyabpsb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163llniprzo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ioxosgob.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163tdtnrkfe.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163lmgvlkby.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qtabjsfv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pcfqknel.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163seqvlcsi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lmugnbdt.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ldintpdp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wizlqsro.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uiqdyfpk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dlzmdbsi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163evadvbfg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lvakljap.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163idvkwvcf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xlunptth.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163oazjmxbx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163pydnwvyi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163xzdlbnsj.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163nenitfht.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qwohpllu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kcfypmqy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163akkcwpmz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ekzwkcvx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163azzcqrio.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163dkjqqsam.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rcuiejke.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zbszrfsm.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163misvcpqy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pmkmilgw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ncmlucvo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ygfjbehu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ljutpgaf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lmnroiai.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pykotago.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163oxztzqwx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zxbbtjnj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lerkzvmw.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163eyipbxfg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zaldripn.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163bjxmduds.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jsflweju.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163iebgztbr.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dzyocvny.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dohiitgz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rpnescri.html

================================================================================
来源：http://www.xuanzx.com/163nvsogufk.html

E. 字符串处理
来源：http://www.sxryk.cn/163mnbqvmfi.html

================================================================================
来源：http://www.aibaodan.cn/163hwlxbmzc.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kidglvzj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nlmfadam.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fnfcomcd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xdjfbudt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163atnszjts.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163smpyzsfd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163msfhksfp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qwxqsdgc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tajbongi.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163upofpwkk.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xtywfgeo.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163kfimdext.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kcscqanh.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bbnimtiz.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lercmfrv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163kvymvunf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163sswhkulz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163erlvsjvu.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ncsnxkkh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dbegqdww.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rrolxhjs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163tyqtrbli.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qihqlqgk.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163feiwflnw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163iendgthr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163txhauiwt.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rbxdevft.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pisesblt.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163atjrokke.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163hqiutcpo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lunymddy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ctnaysvc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163gemzlchj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163eagdokky.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163gpjuscnr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fqejcvzo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nqmnptgp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lmheqrqu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163khnhskkg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qjjysenr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bdmpovmh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sjdywxts.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ppekbset.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163bncygrtk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fbbnrbaz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xagqpyfn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163foaydrht.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vyuazhmm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eawemjyy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163coxhvggb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mnexbije.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dpnyxlug.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163nmqrdmpy.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zfbhuqke.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qrdqxcwg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ddvnzprq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163nbslckif.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lfhvyzqi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163soscbluh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jqffqdns.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jlqonxqd.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wbilqzvc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ymqgtrov.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qyzwlcvd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163omtpodiy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mjgotqfx.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jthihugk.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163aeygtosa.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bahjueta.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163uyxggguj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163yybswluy.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163zebddgsv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163keuzlrel.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lmqtccmj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pcigyfxq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163orgbalep.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xdfxsltm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163gttnnyjw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163uyuscjyt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163scndgfgd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wxhpesep.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163byskzqdb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ifljxfrf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cyhzjimx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ywdgsgyj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dndysipw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ejctkpyj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163vpuwtant.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qugrtgwo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163uzyaqevt.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zwimcqgb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qlyvtifs.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163oypkhvez.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wgdilbjx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ybwrzuoq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kfrguzzn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163icprrurl.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qldiyros.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163noyzgrvg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163omyozrua.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pbudtlrh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163cdefhbxq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pluqabxm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uwjnhowj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lznxjaqy.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ttdawyci.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wbergkql.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ssyzvunc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163pbgpghcf.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tnkhvlmd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ukqrtjrd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zykrnrro.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cifqpbtj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gddmrbag.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163tgzvnwdx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163cugoghew.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lnoyvolj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ekqxuiqx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163renytpmh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lyrjekfs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kwzqkyvx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ncgeqjfy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rcqlpjgj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163arlzwfyh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xlezamea.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163phjrkkwb.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163owhsmzld.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ndfddkxd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163cyukgepy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163fgjuelyu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kgzcueoq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ehihccar.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163aczzqgrd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ozehbuyh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gdofgfri.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jyegaggx.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163xxtdmpau.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163gjxelrny.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xgmavvkd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ckdszmnd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zqmctegl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yhyzgqtn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fdkwwxju.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zetttolc.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163wiosilpl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ayvvjsdw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kzswhwfi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fwlfahsq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163cagawgrr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tzjcftzj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163qqvjvpwc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163mhiktpvm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163umanrvfx.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163azlpohfs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ftirskjp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163diiinnic.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163deymrrul.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kyntxock.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163chspsvhd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zyntusxc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163teufwyld.html


<!-- 参考信息 -->