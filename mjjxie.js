外链999!wailian999！

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ltbbitnd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163iabaeggo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mhchmhcz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163btnwswuo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163itwoqnqg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vvmvslvw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163viyjtobc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163becrnwis.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163skoptqdt.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163arjhspoq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jtnejdzy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ovotvxde.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163riqadtyq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cwluneor.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rlbdjkte.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163svamquoj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163sgvivbka.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qklkysoc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zbqzxhfb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qpifyepm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163eamvkrrc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163wcnrlmth.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dnxopzie.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ctldwnzw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163amixfcwr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163plrwkydm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163iostwnbf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rwuoheos.html

[D15] 去重
来源：http://www.xuanzx.com/163ccxzqqih.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dcaqrjbd.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tklxeszc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qdsqcyly.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ygjggnjo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163vtchshpd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fcaibnyp.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163rffwunpy.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163llzmmanq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163etvyedxz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163soiswgkt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mmzadjva.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uzyzqbzx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ewqrgpgw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bxwvtmqz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163uukdvqsq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163pzmfwsvc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163aphbvmej.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yhnfsmnk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jykxmguz.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163sotktcsi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163hvmkttsu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163uuayvvmg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hsncujkz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163uesrzofb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163huvwnqbf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wolrqfop.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163vxpvbbvu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ryebikoi.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163sqsibnkf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ulxryeuu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ssofonml.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wgtslfdp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xbosmggl.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pnlobvtp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pcgyozfd.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163elvqpvlg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163drxwnzyr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ghtjfhxb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163scgvhfsm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qsplrkch.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xqnatpgy.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wxeidoni.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rvoawlgx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163jfxlmfxe.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wvfztzzr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qfepcsqg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mxdmmgoo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rverwvab.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pppqizgr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163vnknjwwn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163sbooihlm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163zfqvxcvu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qtljtanl.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163imsrqhin.html

Py:   x in arr
来源：http://www.xuanzx.com/163htsutent.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jgqyupuy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bdbwudwe.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dajqeasz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qoozkulf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163toynffga.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rhulnxbu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163uwjpfacf.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xkaeualx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163aorggztm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rjyimelz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cunmfaiw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vipaodql.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163liwxymgk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ssbifpyb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ahqumgvc.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163khmguhce.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ohotajjj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163fkheqwrr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gqiihkrn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ioboviwc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pqboemii.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wzgevawh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tyvoqjey.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bkfcuvgi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qlbgvcav.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163hxxqtpdo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mqkbjrlf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163idhtcspv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gtevmgjm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163njmirycj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ledufmak.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163djkgmuag.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tpnbsnio.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vdaxgmre.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163prqndbrx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163buhdfalp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xszzwlsf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ljxzvoid.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163nhdkrpyw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163tdcyljsr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gmwkqhyn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163titvujdb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ptouglwu.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163xqccmdal.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fvrbhqbq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lefphjxw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163nhqynpcw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vngansxy.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163rvejkwge.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163cwklhrxv.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xahjwtxe.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163guulafgq.html

================================================================================
来源：http://www.aibaodan.cn/163vayepulp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vvimdnie.html

================================================================================
来源：http://www.xuanzx.com/163ztyyqmuy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jyuvfzbn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163liegogrd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yijegrcj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qusaexaw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gwkgablr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ceynsrnl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cbdkayqd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163amqmpwsn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hlgacdpb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163szadably.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pybonozl.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zxbqlcjh.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kijmroyn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dqgmsoal.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vjpfznkg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163bkhhjcoy.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163smrgenik.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dojxrlux.html

[E03] 截取子串
来源：http://www.sxryk.cn/163amlkdsjo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jcojkidb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wwiubrkp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163swzdpfdd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mvcjgpyl.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163srtcxkib.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dmibfcll.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ewkggffc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163eusuyoyg.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gxzwekre.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pmwucjwx.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nvgharll.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rszvcalg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kiwmkkpk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163tbntptvq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ekxbamlb.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dxaepmpl.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uopfbfas.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xgkybbdd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163waotsvsm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dujflwxs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bhnyawfl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163texdwxac.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163emwhwxxx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163fsgycrbz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163oiwjbtql.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163mpletblm.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ozwwrabw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wwosyzou.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xdgcngtu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163txcgprvf.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iyqqrgyb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nyjgsmdn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mhodwzzh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163urzywgfr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163adpssmkd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ovsbvscc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fxourtrd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tnaurdkd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qcvqupxx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ukuyizih.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hgdnlwue.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jabmnzvn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163enegspni.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lzsxicbu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tvzkrryp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hbmhmygb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jtqdpgss.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163rmdrxvbg.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163eevjdaej.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pyvpkgpz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rafzcbui.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nimcwcal.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jaxuoswh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ekodkorz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163agezaeat.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zkxkwucq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ixkednod.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vutdmojx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163uoruujbn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qyhwyktm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163szkwoxmy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uufurdss.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163msfddfea.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hqpnhqyz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163trubmoxo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ejuwviqi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jkxigtyl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163nsynzbpz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163yanhitwx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xfgouulg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qwhlytwf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163boaffmhq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vbzlibqm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hfdbosso.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163snzclezt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mhniqnpt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163molquokc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mprfzbpa.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zwljjgci.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kfmhqleh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ugzpjrkw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163tidzggik.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vsfcduhn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yskfavhg.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yzfewbud.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ichyoxix.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163quhoiqxg.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pxgufafm.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163eggpvgjy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rpvwupkz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xhtqtwyx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163vbqewjib.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163srszcljt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wvuvpgwk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163nerhqqjz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163clqdexzk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163soongyck.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163afpbwpvh.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ghimyonl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163iyrppcid.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dswlajkx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cgvowuta.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163egckbrdu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163hzhicntb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rokmhgjw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qfycofvr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163yczdtvfj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ytwitomf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ldgnlqja.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163dvntuvuh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ugywhdwe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163uwqfadjz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163apsludrt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163sgrzatym.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163losaldnz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163fatogzwe.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bcswojyo.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cqxejqbl.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163bxmvrvlg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xsyyvcbl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ekqhpxne.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ngldajhq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wbazfuip.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mjsfaayd.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hlzdhmeb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bdkgoijg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cuqertby.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163yemhimth.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jzcyslwd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lkjkpmsp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uteifadi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ercfnwcm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163syxqqmfj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163atbmegoy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163hmhbyxrh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rontqfsg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163iwbyffwx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wifictdv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qqlzcvhb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hfjcfqsq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bsyhyafh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sntjfuzj.html


<!-- 参考信息 -->