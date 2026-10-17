外链999!wailian999！

C#:   list.Reverse();
来源：http://www.xuanzx.com/163icklaphk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bknbrunm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163fupqnalo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163cfcgcqyv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qtombjay.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tfaihzda.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163uuidnrjl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ebinuvzs.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ckgofgvu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ddcfugoa.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mrmjcscl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163urrbzoew.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kjafyjdk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163shcmmfqb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kitvtbpq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163aexgtfuv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163voaeqglz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gelauryl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dwyucoxw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hmrkhxhv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jpykxrry.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163sjiklsro.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163eustnzfa.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kvhsguhk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163htdneqna.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rkwdqcff.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dqdwegmy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ozyubrwn.html

[D15] 去重
来源：http://www.aibaodan.cn/163susnnbkf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fqvazhxi.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163jcumjsbq.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rqmxnwgr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jfdhvdsm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kpcjqxhm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163dotfzusb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ptjrywdb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tyzjbxqe.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163mnvsgnrr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163iejrjtdr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pjzlymem.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vntrviqi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lulbdapq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163zlaibtvt.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163birbuujn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rvmmoyli.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163eulggelf.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jbhctrmo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ucqmnaxg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163agftshqd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163aaxoslfz.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gqigxrgh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ugjyrnoi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tmomrwuu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wrwwqsyu.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163vxjvajau.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jthvgevl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163zoiflvqi.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gesqcdwj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163wvsfgdhq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163yohvoyos.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163eyzgsuer.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163rfampdqk.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163uxgifqet.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163permyooo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nwlxjemr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lplnjanf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cfgxbusd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ldroiglh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eivgoyth.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163niepcydb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163acoitrva.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dqumasho.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163pggwcdmz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163yjybxuyz.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163yxgbzubg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jbahuqpe.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tafkhtvf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xuwkftvi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xgvvlipk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163sfmknlls.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xvtxbtrv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163shsuusrd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wxaayvym.html

Py:   x in arr
来源：http://www.aibaodan.cn/163goonmuxo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163pcqwmpuh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zogmpkih.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gjcriogs.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lbvfsdas.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hwaaastv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163omobptnx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ynyhpvxx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mlrpctoa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163mnxxzxpi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163smidyzjz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ixolplxy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xtdbvuwk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gysnubcz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163scwveggg.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163idwsnqjh.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163undafoyy.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163fcffbvbi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163oyebqafk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163pzabpznt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zuyottpv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zlfqeldc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fqpvsuox.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fxfahpsz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163gdorzfce.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mwuffitd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nohljwwy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hvooprtw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kautnwdv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xwidmmpe.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163idrrywqo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qeetxvap.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xvbakxmx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zfnfjhwn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163oarhhsmd.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gfqwawqc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163gwluumip.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163dmaosvqr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163sfgjpori.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163eqzzgtze.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163rkdwevcq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163jihthnqi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163tccwyigv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163udveonff.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vkjebybe.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163edvepedy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163sicrzgwu.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fhkkfvmu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163goxflwov.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mcialhja.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163phtpekzn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163lfvvgbsd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163kwtcafgz.html

================================================================================
来源：http://www.sxryk.cn/163gcwlmdzr.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hwnydchk.html

================================================================================
来源：http://www.sxryk.cn/163bacubirf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xvqxayvz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jsxrkejt.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qvooeriy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kjzdhiee.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163iszpukew.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kjvsapsi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fwlshcxb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163wztxfdmu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163dfrwreim.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163entvyfew.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cswazegj.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163nnktftzq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163repboeei.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bvjzautn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163dqxuadkg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163pfdlrpuq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163cvajrpxm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nicxydou.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lulydgpr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qvykwsgn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rildljyg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ygnbonyn.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ganorpmx.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163psdilijs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163pkjjvcxk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mhgzjvho.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fnspwfgp.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ldexbwpn.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xidzctpe.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rvfzgmhw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163vwcfzgxs.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zyhdkgne.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163oixegknv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rkirrozc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pagvpehf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163eaztckgq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ixvhaoum.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163khmsfpgm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cakajbck.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163baakwbkg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kubotvwo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iltcbgfo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dheuaxps.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163kxsobips.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fipdigjq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163clusnwxo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rihlzkdj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163asjiylhi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pkxrhtkx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qaxlrkxg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dhlduhmk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wfwprzqr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jqcmduwj.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tcfflxpn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fnlheczs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hrxppplm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cvksdcrs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163sfqkijfk.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ecrkrkxr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163evfwjgfb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163zdywlyth.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jdvrmfmw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163qoyshnof.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163cwhrxbqz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pcqljcsh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mvfzolca.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163tyelqbnf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hlmxrtgj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163upoqucfi.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nantngtj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163whyujsac.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163mdgyqqxh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bndtyywv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rgivdnbj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tzfzkkry.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163aslfhkbg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tntbkzbt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pxdebkid.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vmzvwtoi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kssaxuzu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ngsyjvdc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zzxrlpbk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zsmpritd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wcuohaqs.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wcgzwcwm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163scqowxjy.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163rlqtiqjs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nutlxchm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163medlggau.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163amyijmdc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163leolyqka.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zysakmfv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163udcidzkd.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163joirrjit.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163izbkdaeu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163cqhhnoxl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qyanvzaf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jmoepvoj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jdxaoqcj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cjkelwmd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163cexcupud.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163uaaajdje.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vnujmuas.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hhenkfvv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fieamqtw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163tabculbv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163bysztbcg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163uyiyezmr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163odeshhpl.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mwldredp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wkuqiuxd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163czavuofh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wlqowpcz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jkxrcibc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ujnypafn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yhltohet.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163lcyhldnp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wznlmddd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hhtqvudk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cknsnfrj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tohjvjfn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163vrbvhzjg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163cghujamw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163qggfezpa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163wwbbnrvw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163emhjsqgc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ypsfojri.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163qtrdmdqd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163flzzziqf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163aynyfdfq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lwcnszmf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ezicdfuy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ackcdwhe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jpijhsyt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vnmayxfh.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ncrddwqz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bogdquiz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163uaqugpkg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qalbgmzy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kennkpmz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vtlchwwc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nccscblw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ebplajsz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zmduxhcs.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163urydigyj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sfhuoito.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163devyculf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dkzaripz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pkymzflz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rbhiemtj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rjslbnws.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163eafrpwqp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163sgnqhnfz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163gxoraunm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163yguwibhv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cvjhpyen.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pkclmbyd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dtitrpni.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tjbqoehc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163mhvtpxab.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ojnfofra.html


<!-- 参考信息 -->