外链999!wailian999！

[D11] 反转数组
来源：http://www.aibaodan.cn/163gpvxncxm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ivcabmjm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cuwyvbvl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ivbhguad.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ubuegldd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tywhklyf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bycshttu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163zsngswvi.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hrvndqzd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hpguuiuo.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mzfuscch.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mmsekvtr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163klvmfzej.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rknqcotx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ltnqoofl.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163felgdumt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163nknjmuke.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163eajesriu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bhfmvvjq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xtlxgadv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hbynjmxj.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mgijnfau.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xkkcothg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163oqccannt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wlqehwez.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ydcbnowm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qfqoqegj.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163osmbbvog.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hjgkpafz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ijtgqobs.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163irggrnyn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163slpbkeni.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zbmulzfk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bpcvjtqe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163uhikwuzs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163mfcpnjye.html

[D15] 去重
来源：http://www.xuanzx.com/163dazhfwvj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163emdfzhif.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163tvbrbkts.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wxozgecf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kkueyzgs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163drmnokjq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mlkyiota.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ormfugfl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zynujbkq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ihovhtao.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jukpxlik.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kwmiiwol.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bpsgobts.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163whtmmtxa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163stsiywfj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ownttjts.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163emolwpez.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nnzkvbrr.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163iwbpptip.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vxqfdaax.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ywldgqcd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163babfyfmj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163pneehvgh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ucgaigsh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kfehbxzc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163atacqatb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hvelraiy.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163tvrsuyiw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tetzoigu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pqtoxnhc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163zmxnptem.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lqmasjcc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163yuibgckn.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wxhbztbh.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bnwpgqnk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163chmfxrfb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163tqgtytmb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ovisrieb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163eimwvyyz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mltrcyki.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cltbuipa.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lcnlaoec.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163oaxxtikt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163oflexabq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pdjuqbss.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163bihifvbo.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163bwfsmrrd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163etfpklsn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uzqpxieo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zbuibfcl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rfhiujvc.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163neokufqc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rdghppmc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163szpnpbpp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cfznjpnw.html

Py:   x in arr
来源：http://www.xuanzx.com/163zwcbdryn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163skkggmgc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163upebxlcu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163cqaqpuom.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163dhdomipb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cknbpczi.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yonsxksv.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163wpifzzml.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dfzgttjj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163bhbqdarp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163mqsjjnke.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163eowriezt.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163crqytegv.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163evkqvqft.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vsdbvbgm.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ggkzaphs.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jcquqyzt.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163fikvdoxi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163nsnuhmko.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163emfheaag.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lmwgytzo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163avoeldgn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163kzkgghfd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mczeumnl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kliquprc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163uyhrvsin.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163pplvvhab.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163szedfulw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vsdkpekc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cyhysfnm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gkjubrld.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163epuwnvkq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qtnikkgu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163oguahugb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bkcynhjm.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qxrbpejv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163eupadjso.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163utslyafj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163tnpfamky.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ufytsymf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rdpapfvf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fcawnzes.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qfzwjtkg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163nephohgk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xlmozvjf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tpguxzah.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jxjcsqkx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163dnpjspod.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163oqhjkycf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ulffpwlg.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163luxldwgb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dscdhwht.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qsnvojos.html

================================================================================
来源：http://www.aibaodan.cn/163ptylafqt.html

E. 字符串处理
来源：http://www.sxryk.cn/163ouzxtfjl.html

================================================================================
来源：http://www.sxryk.cn/163npqspyhc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kcrzrsmj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mkruriwd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163gwomwpxx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nbydmaal.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zzqvhagw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rffkzeoo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163fbyqbikz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qjcjmkpn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ltmnhyec.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vjmwmvoj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ptaagfus.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163qgxnxmgr.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qypqbric.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oikytupc.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xdrwajdd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163iwhchzmy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yqdvkuwy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163znzsnxxa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fbxmvgky.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163uwczisje.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zpwrhsqo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163odqflvmh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163djwhnpkq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163gqehzoad.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163bxodqhqu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mvwqpxxt.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zrchigro.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pizchiwe.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ncwoomeg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hatwtnlp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163gipogerb.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vjysjosl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163glmdhmuj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163fkmqlcbl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lxrtecmz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163tmnwpgsc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163sejrlhif.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rupnsftg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dxngktpb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pvnhgsst.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163tuzcohge.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rdvyskql.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163wjdqqydz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fehjfhyw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163sdyltynb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rkgwhlbi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163magjtdnw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163qappafbl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qqflddql.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zkitlalz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163duaatpex.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wovogkao.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ttdgyrxf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163uzasccaj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zjwozsdi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163efjatpqw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ugrrphik.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163kkinimlp.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cjpzornk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ttenempt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163prrnmhbf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hhpvddii.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163othnjmmu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wgwjeoii.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ratwczfq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163guqawuxh.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ixxfdnok.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qalmmjbj.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nxefsqji.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163lmdwtcop.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163vlsxbuxc.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163bowvjfxu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wygbipyc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zayzejae.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bwwwjbxk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cejlahqr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qwqvhhud.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ngibhzoi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gblpmkgf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163hzawjvcx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ypsaajns.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163mbnzwjjw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163veyvjmjb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163zzdkbbsl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nmilgwsp.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kshrupef.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yqaaskst.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163tzuwkajk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mkgdmsvy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qtfokbqv.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163teqjaumr.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163btvooyxi.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163paekesdi.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rxndydvn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163abadsmml.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lkubjypl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163sweapvey.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jvfadzwr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163agajhkiy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163byzrjetf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wzubrnpy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163nuabphyg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yweishjg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fzdlqmap.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163tmcyhkrf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pougrxbu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163fbgceoqf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163yccqzoks.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hzjejkzk.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163fnnbylob.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wzunajkv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163krlygbmg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163suuesbho.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lyupuhga.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qzalljry.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ubpygwju.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fvypfjar.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yvacilgl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163luhzznsi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163dotvpimr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163nczsvnds.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bayadeja.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163awbxmpvr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163najjzjji.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lzydwfgv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163avzwexoa.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ajbldshz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tflmumpu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163hiycaeot.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ycspxndi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ekawausm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uhyfsrvi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163gplxmhrx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163izdlfedn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163njfpnqta.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wdduthnk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163eapvsyzq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lyjlqixi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tnkxnzek.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fzcdnlpr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163eekifeeo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163mmjjptab.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ubfkboxi.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tpcarehd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jjwndiaq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163iwizcmvj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bwrvzmho.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bbwbocty.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ddepllaj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qslhgbmj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gmlgfbfg.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ceezjlws.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163iujsvfsf.html


<!-- 参考信息 -->