外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fxxzcadu.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qpbvbxbj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163kusupxyt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zmrsyrwy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163udwoelvx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163mculopiu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163eatvwlbb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vedxvoqm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163aihvxext.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163zgannljs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163favnzjgl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163yzaoqpeq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rnxxjcnh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zrbhgkrr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163apbvsygu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vslqixgs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yuklrdlx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163xvpcsavd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163wtcvctyd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gjhhvpsq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nydqjqdj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nnrlimwx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ppkfdogg.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vqmjopvu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wyxtiiiq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163juvseedw.html

JS:   arr.length
来源：http://www.sxryk.cn/163xlmxaymb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vgvjnesy.html

Java: list.size();
来源：http://www.xuanzx.com/163sceqjkgj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gqkkbdug.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vrqjfpvn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163sdogprnq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163rmfpztvn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163tkikncsy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163sfwjxdue.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ludukhyr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hcggpzvc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tzkbdteo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yobjqxcq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163muhdgpjr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ydmmefhc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jevgynzs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163heuspnij.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163oviotnkl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xwfinuel.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mbmubrvc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wwszyvmn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163gymezygv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ephbzify.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163pyafdzsd.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wnqovafy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163goeyxryy.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163mkygeodt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xvmauoch.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163tfinsnoe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163oeqjizgj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ohjzfplh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ldaqaepd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163rilyyzcb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163aypnxlzt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163elhyvyyt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uowlieyy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wnbeeajp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jmunhzxb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zcwzjafa.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163tsqrmdio.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dziqwdjw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163pyrdblle.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qbgzadxj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163dtthbtan.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163kftacshj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jdlghrfi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163klloyikv.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tgpxxlrp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dnayjwzi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163aqbuvwge.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vtwrentt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ssmvhokw.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163njyodlfz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163yywaolrz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nxxksipb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163euevzrkq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163roshzepo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163brhbaehq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163stwmpwic.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vvznovbx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fwprssti.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163gykettus.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163nawxktbb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ufpyaixx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lljbeqbm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xbvldwev.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163gcytrvrm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fnghprqs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163jiuoysol.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163nzdvuwra.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oyzmlavg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163mjerrlyp.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fuqasjcc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pjqxklba.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163lcsdxqzg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lgyctean.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rgkmvmvx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163cyokffwp.html

[D15] 去重
来源：http://www.sxryk.cn/163towhhcxg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uzpmynmo.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xdgyalqd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iryinttr.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zmglmbtj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xewbltrj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vdikamhb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xiljdouu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tpyvlmim.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163igdzjnya.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163pdlttwti.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fphigrbd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pqizqfqt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vclaxfer.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fubdcujn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jkoqdxzf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163akpwzwcv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163kjwqbkdo.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sqjiuqwr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jscgkyyo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zztdeyyf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xbjedkdu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163soamsnsv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163rcrqbjuw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163fyxjwcdz.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163pownsyrf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mudkrdgf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163imdtngge.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163sogckdeh.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vokyplwe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163fdjxhhlw.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rxgpjmab.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wdhsliii.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163npwfofzo.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163voxfqrgw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163egqnoeej.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hmzvqmlv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163erilivuu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fuyaaptz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ihsbswtz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xchhwjth.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163sbhvyoyo.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163akmgieeg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ldclvcpq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ygblyhtn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pnlzhrae.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163iojunnnd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163wracqxic.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163omhetlor.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jljsvrhm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163gglyoxxd.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nosfxwpt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163tdwceilp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163oufpqmjs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nvrjngpl.html

Py:   x in arr
来源：http://www.sxryk.cn/163apqzwgxd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zgasxlel.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wutgcbos.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163odgimnrq.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163nermgndv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yocfzxff.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ftoolvix.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163eimdjuht.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163upyqjbad.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163gmewxnur.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jzerebgs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163nwgkvead.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163voqdmcfi.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ftckmfhs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dpzbiiod.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yxnztvbr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163oymtjyrv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mnlofrkh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kduxxury.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163izdnjixz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163njvntyso.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hekpsyiw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163yrwbncjw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qamprlnz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bnjcitgc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fenmadrc.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lzosyexr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163daoolxhe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ozntrkko.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zbxlxlje.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163yfglolhh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163kmprdejy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163mmscornk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fbttmezl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xsznwtkn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gjrlbbzm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163yzumlqgs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163hbuxlulc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rygpnczq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163yneoeexd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163eopcgteu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kcihqkpv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kzwrdduk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mkvtfagn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163idqjsupi.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163biebyhbe.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xqzzutlj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xymgvygu.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tzrbirng.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163wjdzpnqi.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vybwfxyd.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163jwhrtnku.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163kvybhxcb.html

================================================================================
来源：http://www.aibaodan.cn/163yewapikn.html

E. 字符串处理
来源：http://www.xuanzx.com/163itzhnpba.html

================================================================================
来源：http://www.xuanzx.com/163ufgfnfnm.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163hfclwayx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163edtcpxuw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163yfvokgms.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xqxhmddb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163otadnqqv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163xrwwkysh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163miktawuc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tskxwtol.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hviyihhu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xitysfps.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163sstklhov.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163xlhatqiz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iowtsdjj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163omwdewsh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ahtdrjpa.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163uanzchmv.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jifniqwg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nznoumiw.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ywlnemun.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vyaxiqug.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163aygzdifn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fdkrdcke.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163vntrsbry.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wnjrubpv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163stjpescj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163tvlqyamh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163fcxrbmhg.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163sakobtqu.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163brznotyw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pdzrjbdt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163xxnmwltw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163yqxbxdcd.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jvkaqtlh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dflavwhi.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hygndycb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bagkrdyp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163njiquwog.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hhwkbokh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cwrqpiny.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zosnxeck.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163rytxtpmc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yxopunpr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163srygimjz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tzlsdpku.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163nrqiezrz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mtbpsfca.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163oslnvhfs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163emnvaimv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fyxunwdj.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ztuifwuo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dgbcpdig.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163eaqjjhuu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163chfpfadc.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tyvhzwba.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zwxmhpdv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fuooxjso.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163heoeeffk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163febsompg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163qdupukkw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163oarqydwb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163fzofljhg.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163iowxpppc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vcvpncjb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163vbbbtkym.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fyoisylw.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163joasxmnp.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hdcyulfe.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ysfgtfqd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ggllhmti.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163uzoyaryn.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jqsmmpys.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qcfyerbo.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163onfleqvq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163xhnddgjf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nlcalhoa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163noqrqnsz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kmdyxhvu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ccnkpdwe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163oukknfqk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163obmjozni.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163htxlepkb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pmkxcmkw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gqsghtel.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163lgphwyyv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163phtsmegw.html


<!-- 参考信息 -->