外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163poynedox.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163evtkhewf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xenyxxcj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mdqayfem.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wueghgoj.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kfqvborn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vnekctlq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ajqqdpoh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ifnhiolk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163axgokibt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bjugyybf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xflzvhuh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nreomrky.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wriyalgf.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xjptofyl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163semtwumq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cqhvcdwp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163saxtweax.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tvdzprvj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163segqzfib.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lciccmlm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163amkchviw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163juuqlyzi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163erblmeqh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jboalbyz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163caqwoslk.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fmihvcfl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jtgeslne.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163lefphibp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yvyvowfd.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xiilgqkj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163lkqpwqtj.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163roglrcff.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163omkpkhuk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qpnijtpb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hwuupcef.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163upfxgtvs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wibazlyy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163jymadlgh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163yqwivqrp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163jvyosbvf.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163joesmqtz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163deekbkvh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163kcauyafv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ncnenijd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yvbyqmmk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163obxcveni.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ennoyiqy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163sceycoaj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kbtfxrfn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sjmihfcz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163yxxudbsz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163uepavmxv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163pmtoicva.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iklrhwrl.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ivgdhwph.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163lhweexyk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oquqnhtg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cylposhz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fusnspho.html

[D15] 去重
来源：http://www.aibaodan.cn/163awhcasuk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hkybtnad.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zfirfoel.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rkczudkr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lfsdvzfu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163enzaptkn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163nyfsdxjz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fzzuusdu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ymemfoyg.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wpzmocxz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qxzudfyt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163reeunjxh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vbmddvby.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163eortollp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ihyusyfe.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ouhnvuao.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tquowtsr.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nvkzcxdo.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xvqbortw.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163spafcilp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ozwodzdy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163tlkvkizd.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163iggnlozo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163dossmvej.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163znqllfvn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gwtlygzv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163jjnbsgbo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hmeoxziu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163woosxhcb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163yssvyoqz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lqctvmsn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bhprgxht.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163kuzcgznr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vbuxtnfg.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qrojluta.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163fylmqzkp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ufmfseho.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ctjqqmnc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163dnvrjazc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163htbothbi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cxkkrdpc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163unzxxkkp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ngnnbdjj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wdkhggzg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163wjnhypit.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ogubkpgh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vgavcxou.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163imkdvkjb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dtgaurey.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163khmmzptw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163nzhesrae.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mgbugjtn.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hbdjkefk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wgsezhkx.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163euyfmmhy.html

Py:   x in arr
来源：http://www.aibaodan.cn/163bjwecwki.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163hqunikof.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163fwvpvton.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163aydsulen.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ngvijqpf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ysaziuwc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163cecipqyg.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ehhxzoix.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xjrysxpe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lsvkqulo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163izeoivxq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163funjxkqu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ccbwiebw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163zcwtudbw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163maqtmnkd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163cqpkgbzd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163agumfekx.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163rwuteuvv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163oczgnlsr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vegqjhek.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rjscdbkl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wyvdvmsv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pcenpaxr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qdnrrdty.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163foimyewh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163itymttsr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163atzlqtxr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163lsinxioz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ibkvrrdd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163vsrtrtbf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hbmgmmbi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tabwjrnr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qazbcdgr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gbuurvub.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ykgokyqx.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163fznlxrjo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vtcagdqf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dgcomceq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jndvssbo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wgxiwtat.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163tthwierw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hvmstrsk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163natrexlx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ijvkcqrs.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163lwblouqp.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nqpjambx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163eglhxutm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163aylkzuon.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163opbcuzoi.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vjzjtnjf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mchpdhti.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163sszrryer.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jvgwbvai.html

================================================================================
来源：http://www.aibaodan.cn/163xwkwtuif.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lkqnqfer.html

================================================================================
来源：http://www.sxryk.cn/163zmduqwtc.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ewvsljdg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163urmnnkeh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rrxxoqql.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jfnilpsh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vzjhxwqj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163queyhrzd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xdrhvnuu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ofybfykg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xxksmsgf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dyyjohyk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163metnwbce.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163klrvhovv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163molepmah.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163npamzjcj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163gaxxrlca.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mulcvrco.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qumjlqyq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163fvebwxgy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163fdeoqaes.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163brvimazf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xuwjsfwr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vqsbjqrl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ayxxgbof.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cxnysfvd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qfdzrenw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163aukrqlwo.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tjlccffg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163iwgnhgpd.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163thgqbxbr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nxrbrqob.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pcxhaxzd.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gnrpfibk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kwvxgsuo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vlqrvrsi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zydilvhx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163utdoqnvg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163moekqysy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rtseqgxx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dwwlseyb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zopdjhdi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163gcagarga.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163igiqajat.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163cpqvownl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xbclludz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nueitert.html

[E06] 替换子串
来源：http://www.sxryk.cn/163vbdjfavy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163raoktvqt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163osvsgshz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cejanbxt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kszddawd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tevmlivp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qevepupg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vujondwi.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qbimyvja.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163iwxvsdvc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163radrdaym.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163esukinuf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wvticshh.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163npzqfygk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163dbxoobtl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163izzyowvt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163snvjshxb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zgngozgj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163nkctacwm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hgakumjh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bgotquck.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ikefumht.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tfdgijye.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163iqafmxlq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nhgmxtmn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zhilxjee.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zteinfoq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lhnyydmh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zliqiagu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ylpzhjib.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ekzqkbdj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zkcdzjgf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fuykugkd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hqkvppuh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163rejjncne.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lgndrztz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xfwnqrma.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163irnrgayy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qeqcktuy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163otbrfcaa.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ycepumsy.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ulxmdcvn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mvrvzeoi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vqeniihy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tmqrhgit.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zvztoqpk.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163oppldewa.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163bypujpbk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wyxyqyrf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163sykjvoep.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163vvsbnyjy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163npunuctc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tztphwwk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nopniwww.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gwdmyxnp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gkjjpbwb.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163hjyghjhk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cpeayeue.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hapjpypx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iplwwyxp.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163trzhhinj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jqouxzhg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xrcrrmpt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163svfbvyiy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163sbujppbl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163bbvcfltx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vsfbabds.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163olvkbfit.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163beraesuv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163yqrjmkkd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163sjlkullc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rijqwaov.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163uskmakqd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163oovktpnc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163stzoqedr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zsxbqeuy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zsqttkuv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mawyynuv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gtwvndby.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163pzbwgjdi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mzvgfybm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163zcgavffj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xhvwagum.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cqhrssoa.html


<!-- 参考信息 -->