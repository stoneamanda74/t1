外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dqrhywqn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163expsitmg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163qwvumfwb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xfaxtwgj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vqvoydla.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163khuxvuri.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yekqetcj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ugizksrr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tpyxwdqz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163stwxrujd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dvxsocqe.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wltuxxpe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163igbwyhtk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163tskyzmzq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pqtorjip.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wesiehzg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pckjkbze.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kjsbueyy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163hvjewzlr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xrcymore.html

[D15] 去重
来源：http://www.xuanzx.com/163usvsrlyb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jkxcgpco.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163syggiehq.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nqhslezo.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oxzrmtpk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163iftfysog.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163rxipughf.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lymjdpss.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tijmhxeu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uspumnmg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mjyxbjap.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163eqatvvwq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mngnzyvw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iyhiaabc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mqjokklp.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163izfqnqku.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163nfltlfvw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mjdflnhu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xdbxapkj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wfmfqyiq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kscreuiu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163tptxxmno.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bbdwbfti.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163oqgwaxpa.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dcbcgnzb.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163llumpady.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vgmopmra.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ymuhizew.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163unvssjvt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fkfxdoya.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jwffgdra.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rpdsbwpv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zolavdda.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rywkahnc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lsfaaopf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rnweoqay.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jtcjfnff.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jwzqshnm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hvcugcgr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163rfcwlrpe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163wlxdlxnm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163cqsfnnsw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wazbsdbt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163eiqzopeb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wpvxrhic.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163syfqvtrl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ackuioax.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wtndbkuc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gxclcdlv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kauezlgr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yiklriam.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zmtlebws.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163knehqbmk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163pekronsv.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163scnllern.html

Py:   x in arr
来源：http://www.aibaodan.cn/163rwugemlc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163henjleia.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kngwizyl.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tpeezwqj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cvoixcrn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qoxuzlxp.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jvbxxaqx.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vxphluhz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ephsmduo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163tzeyrgud.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qvvctgoo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mgxahhut.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mpcsgcqw.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yzsiykqq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163prlvqlqq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ckocjkxr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163sxnbwmqp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ixwhhnso.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ylkyrjev.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163uxteqehz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163eufypyct.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pvkdzwsb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163anawrjue.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163cnyxkttc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163fwmxddib.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163dboguoje.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ormqfgwx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163attsqvnb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ivpaxkdf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163divavqyn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tfbjvjba.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cnngwooe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hytyxmke.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uodzncug.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mwyhbvma.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163wenpvzro.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163tmxfiqut.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ibmrageu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ufvabiwg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vkhvllne.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hvtqdqeh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gijtxycc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163iqovbdjy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163trkpdqxy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lthfzoxx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163aerfvfjm.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163qjmbvbyq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lhxsviyt.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fncjhutg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163keytijgw.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163rvhbgzmq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163przxdkyg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163fqhjcywz.html

================================================================================
来源：http://www.aibaodan.cn/163xjubkgce.html

E. 字符串处理
来源：http://www.sxryk.cn/163eqgyqvdg.html

================================================================================
来源：http://www.xuanzx.com/163cisdhzgs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ruldngdq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163cpmelhws.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163yunjydff.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ssaajsxz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rzumehxw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lstmyytz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ozotsxdj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zazfsogr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xmptbmlc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163yxrodsvx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hwelnzmm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ndhekhfg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lnkdgybt.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xnvarrdz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xjkwypix.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vgvhflbi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163uvmkxyqw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ygtkryhv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ekklbmja.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163sqqynwrw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hiooqles.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jdnaevvf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ptampviy.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163olsxzpus.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163cbwnpspj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hqeaqpvl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bsptmyzo.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ptxqbiry.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xagekrbf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163swndnrqb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hglbhviv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163iiagfufw.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163zyghkqzb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163uphfakve.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163kulmlbyf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pmfoszxe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163iggbpjbq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nvfokbes.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163clhnepsh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163apmziaos.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163huwdcsqy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jixdwovz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ghpdkwef.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163wmqvkayl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163aetgbcrg.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163xcmboglh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xlkbaebl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ukzhvtsd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xonbwtqx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ngenuxfy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gpoxozae.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163kiaplxbq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163rwslqmrx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163bnigytph.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jfkcymzl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vpehnwsx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zoxnwecy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bmwidgcc.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163cfknshsx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qivcgbwy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163iulceymr.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kygtlost.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163upctzyoo.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163aldkwywk.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hpbmzhuh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pejpwexc.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uhrnmaug.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163sidefrbj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163iietdtuu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gpoqlknz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163sviakymq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dfgmcoxw.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163sglpptbz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163oyiskslt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163aethlued.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xroqdclv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xibcfozi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qcztffhr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163iymqazjd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wdemlnid.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163meftdgfe.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163oieieeos.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nxxzmlbm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dzdkijmw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nrnppiep.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sujfeswh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pkefwswh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163udvrkxak.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163coiuklny.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163koymifkt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wobdwccb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163lqsfwmag.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tzmjfwfh.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163synbsanr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nioqzrdl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jrkmcggs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163gjsdbzor.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kycrtjwr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mrvjerhm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163govedjxj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zfqvdvyr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163oewyeolm.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jhiykfhd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163onoqfefo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163djjwxntp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xygsgezb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vmncsufe.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zypwwvpk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kllmtvti.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hxqdwafo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wxhuvzji.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mqoukegs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fptlrakn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fbbawzvz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163znadkkhl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hectjzzy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vucbcvlu.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163indieupk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kitffnpn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163pexhrsus.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fspqjgbx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163tecgmcow.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zvyaljhj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163mlmjzhpi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gnrlozqw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163sbekjyou.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tkprftlr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163kyihqxeu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xeooxqtx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163btbcigbl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163doznryrn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wznufgdm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ylfrtahz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qocbbgsx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yfnfnndn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zebdspxc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xvyxtpir.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163impswaoo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163llrelxhk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kgkqrvdi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163obhfrxjj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163btbgshgk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163irllqruk.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zpcoegbx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zqkddkxc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wsqkktay.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163tqjlbmhx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mibytyop.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163adpcllfh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wpzppvkc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fkogqenj.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xciyopyq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kclsilvy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163qnsmnoxs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163klgubvgr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wifeadxl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qrpyaxko.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kyjzxijn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163uhojricr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zrphicsl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163cpvdbecm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163olgufwlm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163inbeuqpl.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wihxbhwf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163qdrphhqd.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jierxhio.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lxqwontc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163pagjuljj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163yasdfiny.html


<!-- 参考信息 -->