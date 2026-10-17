外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163grbzrnaj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ijjwyacm.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ysgmjvog.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gygwrzxa.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pvlhqcqz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163gfvmhqtj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163seebgwyd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tuppysct.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fmoyyyuk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ffszxduj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ehtgjwpu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163acjpkoha.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163anivibsm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163adfdkaub.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ffuitden.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zsidgtmn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163alaedrdl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vdfoamts.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163lisoqurj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wklnozab.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163axejikhc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163iumffseo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lbykrqpb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fffcnflp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bnjjonew.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163saynkwtu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wdvvdozj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163pphhifqp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163yfhorcba.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hpwbemhn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163obvaxvqk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nwfteypq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nhpxasen.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dqcbrtxc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163omesdhpo.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wpdxhkzj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qnmauzsy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163prwurlsk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163sxvnmseb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wcvwtnsb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163deiwcknj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pcyyvxgt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163dhbmnmhg.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kmihjrhl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wcfnfcga.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163opcfrlqg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163kgogjgpb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zzqkkrvm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hfltrfhy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kdbvigyp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hklvrnpn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163heeeqhop.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163oludfjds.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vtebthwz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ydqaioch.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163sdnnddlm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ahzblphn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xkufibka.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163chhawtsg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zdneengw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163cneysbqv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bmhghemm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163onwfziqp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163aoomnsna.html

[D15] 去重
来源：http://www.xuanzx.com/163xvgofxlc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hvioucpo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hkrtcdmg.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kyptkzgv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qqzxybwp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jdkxkbgv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163clcthutz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163msguqrty.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163lttvuwlm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163incpevhe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dxjladyr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163amuwfmij.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163veichptm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163udrfedtv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163tsomdoja.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163riltoigw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163rjgsbqzr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mhukmupc.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zyflqzpj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ulvvgopv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163isxideqh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vlvrrvhx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163inxtfaxq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hrmgiege.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lzlltdkg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bcgqhujv.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163iehcqgfy.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zzpmzgxt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163riljmplv.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163nicjozac.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163cwwtvawo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163punucywy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163kaazafxy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163sfubjozf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kmiyigsy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163fsafmzfu.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vbyyogsa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163qtxcswws.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163xldcrfnv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163fikvkvmi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jeixxenr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163pwudlsqz.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qxhppdud.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zhuecwad.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163zirggsyr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pagtckzb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163snrzyjyj.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jmfxkjxw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163donqsaqq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dfrmkcqh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gfnymbla.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ribnwvbz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163iiceaosj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163movicybg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163aywmptpe.html

Py:   x in arr
来源：http://www.xuanzx.com/163nfleddut.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163pijtuinf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163epmaupqq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rzokmeaa.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lqcgaafz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cfkngelh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163pnxsoetb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163mrgqihhl.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163bbryxvph.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ncgeacdk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qjbmazdo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xnjtwbyq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ihqxvmsc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163mardicxs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163nakcpdow.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vwwnlxos.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ftsvfkys.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bihalmfm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nzplrfga.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rzeylrht.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hyjsfvxp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163imxvtvze.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163vdcpnbul.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ecpkogvy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jfflvkfn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163duokjicx.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zudttcbv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163sloxdlwz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xzgrwsnv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163aywbazfl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163obcbaodm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nhqxqyzn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ztzxmryc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163grwqfxue.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lsaszdyd.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163xbupaweg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fcrjcwjy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fxijqunt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bdhjmqmv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xkmkgcqd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163didncxlk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zpagaimm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ojkxnywb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jbnhyaqn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163skjbochm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vlbixuxu.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163nvgufkbz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iwvtfxhf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ksrgwtvr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qtvepiff.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pjntczzg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ovkvceps.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163uuntmowy.html

================================================================================
来源：http://www.sxryk.cn/163zytkhkzb.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xhynrygh.html

================================================================================
来源：http://www.sxryk.cn/163rkqmsqsb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gjhcgxja.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kmytqpke.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zlvpdanf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fuhnqjfs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rakqhjle.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ubxpsowv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163djnzzjdo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163suelqwgk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xkjzjopr.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ihdxyikm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ojixukqr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163tityskbq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cmhcawnl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iiukgapv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wnxffnjk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163esxiiphy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zflpghco.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163odfmyrbi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mqytybxh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ihwyzkci.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163brdruffy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hbtomqyq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163feghqagr.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163oiinmndv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163aqrddtje.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bgaekovo.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163myxguuvc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163yfbrvkci.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mjzpzjac.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xalgmuhy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163grvvbreo.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lhfjlosb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163uoktuynf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zimobjrd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dvatrxba.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163kijyknad.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zvbwddxw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163evexjfbd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163yupvjaxm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ormxqsgr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xxojmmcs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fjoalocf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163bhsnvnch.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pteduhap.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vdmtqrwj.html

[E06] 替换子串
来源：http://www.sxryk.cn/163iggxwsmv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163pvxnpulo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163quulvyva.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dtllhyxg.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zklwddio.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163llvxvmox.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wclgpapu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163coicuyaj.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gmasxhmz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ylsrfgee.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163leqdewgk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163opthgclk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163udvkemym.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vbxcenfy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163bnhgwfns.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163anxtmocr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uyitacak.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163bctacohq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163kicrmoex.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163mncevmep.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163saqfabxn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163fgnsvehl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163czhutrak.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163rhqdxjnj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163uhuluaqa.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lslwbsmc.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163sdvcydtf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lbdoriuw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pgpcbuer.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bhocddoj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zaefjwyc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ncicrzoc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jtsaveke.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163oyjtugnw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ynbwmorw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wtbaqvhx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163eyhyonby.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ydfkzrbv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163jrfgeoew.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rduhrnvw.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bhcretba.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zikvopqc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ethrbodf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163pdwyfggr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163robwkegz.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jloliods.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163sofwjbid.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163kuxdnfle.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163evvnsyuk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ogbogwha.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163piveoobr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wmjnxniz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163sgewdbnm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yxujokfi.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mlxixqfq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ddaftrek.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vnezxwic.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dslugmkt.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163glkhnsfk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163eeuvmjgp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163oprokytj.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ebozzyuw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163pgcyexrp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mbkslkkp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ixwucqrs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ylsfpkcd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163igavkhld.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ambrsaxf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163evvfjuwq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pjgsgdnk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163oxbyfjnc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163nxpnhgzl.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ghaavihx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163rvnygfbp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163eykvpcpl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163njhawwnr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163sopvsfvd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ononwbbz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hppzgwyj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163elhegagw.html


<!-- 参考信息 -->