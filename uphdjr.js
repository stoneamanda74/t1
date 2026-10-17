外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163znbyglle.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ghgsjrxj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wihhvhlm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rdpjhpxy.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vjhvrotb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163dbwngrvn.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ttvrhxbd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yjsfjtdq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wsaphnog.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gattiydm.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163pgcmzfho.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163cpgsxtge.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163oprqnrxb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lscspymm.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163oxzegeem.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163kvhpntwc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dnhriywh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jhvlysce.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hvqxdkvl.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qzkegunj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ctqivtqn.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hhxmcizs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163kwxqxmym.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163bgbjzqsc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ccemmhoj.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sorcnyfj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lpddegtb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163knfqcycy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xizprxbo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163kovvtbqn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rwgrywkb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163uxkombps.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163eubuojqt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fpjponti.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163bzjilejd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163abqwydav.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kexmfnpg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163moqiowcm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bplwlhih.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gwsgtvqz.html

[D15] 去重
来源：http://www.xuanzx.com/163xciqrgtc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ulkcoqdu.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163iutketxl.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rebexrnh.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mchfcwva.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cwhwhzit.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vtdfbtaz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163tezklucs.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zxjzozss.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bcmvhtjc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163aumdyhwv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zbxdltow.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qlwcivyu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dndpdvbf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ofjgvwwp.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163xbtiqjhr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rvctxxaf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ymlixjna.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163yzqetecz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qefyddal.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163uprxxhuw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pwzzmjwg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163gkdpvmvp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ybtnfkws.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163plcyixfp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163immfimuj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ywmxvnns.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mgvsvues.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bgboravy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ygnpfpqu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tekkvxrl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wtpjlmap.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rperdhgg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163rljrrtxl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xnvtxqhf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wvhdqxdv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zlahyyhh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ilgjifhn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jtakpudu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ehqwwntw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163oguxxavj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ejqivftl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163dnnajeae.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rwdcrljs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163udixtnac.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ilmvxxfx.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163hswinyfk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163iyueenhc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mbgunkvl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cfxgldao.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kqosakih.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mdhwmqyd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jajobqvb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lutsvtvi.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vmhqvxgr.html

Py:   x in arr
来源：http://www.sxryk.cn/163rupmocfw.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163raaeeene.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oazgtjom.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qyamqxwj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163igmvfqlz.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163whubaedt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ebxudres.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163sxnepxsz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tluyxxzd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ntbdeydl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163sgvllihf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163zysriyuh.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gmobyurb.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163efoaxoiz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qlelfxyi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163axmuwzyg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163svrnvemg.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163crjjfrtx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bqlfdcce.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ajysgmzm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163phdrhbpy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sidbgmdd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cobccffg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163oyvfquqy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ahlhkfzl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cgoqdfif.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163aqfsrzpb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ecjenvae.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163lxtiiqho.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hzbrakiu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163urfmfzar.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mxtlohrc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163buajnzvl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uhdiakwl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gcxetkdk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163diyussmb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163dtmgpxwx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163uiiaazld.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kctafyst.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163chqdnmxu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163byuhrqxg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163suyxjflr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163zbjhmiyh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163yhgvvjgs.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ovuueced.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ppqdwngr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zetvzyew.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nqghqxqi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hczcitqv.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163lyfknqve.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163etooterv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163evytqfcl.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wwarvsna.html

================================================================================
来源：http://www.sxryk.cn/163ghclbfrv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163veeqtyjr.html

================================================================================
来源：http://www.xuanzx.com/163vdphnrud.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rpztkwis.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163mkziddjr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qcngfvpi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163miehyweg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qolkaqtx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ndpqrmqa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lcahbhpm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163yqjqtqhu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ycbziejo.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lwrirmxd.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yduuliix.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163eprorfvm.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vlmnmcao.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jloeefox.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wtqvxccg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ymhudtkq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hjwztxsm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163eysxobnc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163riolaexk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vivagrhb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163leqrqhrg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qeayfmax.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cypnvvpr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163uzxljmpx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ndurrvpn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163arwdzqer.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ytjdrule.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ieqlqyso.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zhwcwmnd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jihmdouw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163rdqdivrr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163mqsuispa.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163gnbdkdce.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163phglfmfl.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dizmzgcp.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163cddpllet.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ezlbjemg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fbgdufyc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zdnbyjbv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fxfkuera.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zxjywupe.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163overweqj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ikmrjqff.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163godjhcnb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163uarsqloi.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xmrecyan.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163nblqmzcr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hdebtwls.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jzpjweyi.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uvgxqqcj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jyypmpcu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163lvsibekx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jsmuvlok.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ljjufwto.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gfpdtlcm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163usvpkwcn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163frwjxlcf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dxghrqnv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pjurrhwt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hylhccga.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mzngsyfp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rzcxgxhi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ojuqypdk.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163inpzsnfj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163jcswvbig.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163evcnyzlq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qxuknzqn.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163niqhgkyu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pyibyzmh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163yjmckcro.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nygyspcr.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jcvkjvej.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163wvneefuw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163tlcutqwd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163fdmhvvvo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163olpstnna.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ygtyynql.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wssfnjrr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163pjfpujol.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gldbkgnr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163dpczfodv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163eefgzaxp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163oubattlo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yqsewnsa.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163surcdzzx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rzgmnyef.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bcofxvni.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dvfpfuah.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163uxlpuzqq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dwlrcnen.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163faayjsnl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mcnkjdzs.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mvwffwxh.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kgfoumlr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vgmgtmta.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xovinxan.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163nvyrptxb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ajahskwy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gqavyfgj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ypwafklw.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163alnpzfvp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163efidqfka.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pvpdarri.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iwejhwqu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163hrcjmrzs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hmdyvduc.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163munqjzjb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uevqkwpg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yuwpcpbc.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163clpqwczl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163fxqwrusc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rxatfixv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xhydkcyw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bljzogxk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pgkfbihv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163csoxrnkx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ngbewxeb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163spgahstk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163hwcppmwp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163lrfpsloh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163tnpongqt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163bgcxdtpa.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lzohuahz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nzkkodfz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vuffyuro.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lshdfwnn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163swgptewm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163afckbnan.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163sjrnxpsb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qrjdtlbr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163koreyfif.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cxlbwmli.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163smlempmm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163nhzboxjz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163umrhraas.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163dwwclgwy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163atrzgqvr.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zedxiypu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vdtikrjn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163sedmutwy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163znkirpgm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163sdcpxsag.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mmtaojgp.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ghlhmelj.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rettbsvk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163bjpazdpn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vqscimqa.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ethvasap.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oncpcaqt.html


<!-- 参考信息 -->