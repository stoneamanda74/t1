外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163icjaduar.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ithjvotk.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163lmkemacj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163wdznbrpb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163bunbokpf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163efjrzxjv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mhdnkktl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163hvavmubk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163djmnyqkx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rxsyxwsn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jhepuxvy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tvcyfjcw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163abpjnudr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163crzqzqrb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163kkwqyvvv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163vqinswdz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163oxdkbeqh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wwebzhbx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163gumsyozb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qsunhrag.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gkjpbgfn.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jevilunh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xvdczokn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gcdulfik.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cvafpdtn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xypfpreo.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ztogplhq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uyrotmag.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kijasvkj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zpjwtqxl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wxchsxwb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163yyzgkfym.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mzreyotr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vwonjayl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wxyybegh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163eozxoeuk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163joxrixld.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163iktyiwnd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163cptzxdax.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fndkkkoi.html

Java: list.size();
来源：http://www.sxryk.cn/163vsvkccyn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ubqmedcw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rhfsjhdr.html

C#:   list.Count;
来源：http://www.sxryk.cn/163fefifivz.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cezrmjhp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zvvrlitd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163zzhmyyyq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bqukszlu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jmjbykjm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163avjpysyz.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fuafwuaj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163tjrhsbvv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163djebojtv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163cdcnlvdb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163aomomnoi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gnuffver.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ufblzwyp.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163efzhhrae.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163lqthnekr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163slkkjwln.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wvlnomuc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gmkilnzu.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163uqpkntpd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hotmjxgr.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nxxkckak.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ygljemiv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hhjlvyfz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fhhfcrpn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rptxmtuo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kcbedvfs.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ydifhjef.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163zmiitlgl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ogmrtysw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iqlfrktl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mzqlgtlz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pbsszubf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cwnpzncy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163payzcoxu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tsdiaszq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wnjjermy.html

[D11] 反转数组
来源：http://www.xuanzx.com/163chlwdqqj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163lhsrcxhd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rtonalsy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vhvfztky.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mfzwaoyp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163kpyevade.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dxbrvxgc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tpacohkc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163frcfqjar.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xoqizohy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163myzfuxvx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kbxyoono.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yvtdeiva.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vrnwffyp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ftrdjscs.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163eewkexeo.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163acxjsqmf.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tvwpvgou.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pysytudi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163omhlhudb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163fieckuen.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tbnsegwb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163esdbfnsn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ezlhqfbm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fvtylawj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163nvoogwnk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163yegwuyef.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cpzjemjz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jrpceeqb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zcluoxqp.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163amymzwoa.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cmqgmqwg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163yuwlrqvz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163oqembfoo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nbnxbmox.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ryelapgz.html

[D15] 去重
来源：http://www.sxryk.cn/163tbdwbmpr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lifbxlii.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nltrzjhv.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ojkoqqws.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vsioqppa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163lfsjhmxm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163lmjcekil.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vquzlsub.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qpikhsfp.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lvusfwuu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tnxkasrs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ggfzmsjk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rkcavvez.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iwnsenvr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163toodtvmd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qskmzhpc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yrayrmpy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163lmfcktyt.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uqarzslw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kxoumzla.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bmqvnkzd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163opclpbdo.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163cjdvikem.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163objdynyl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tndjnhkc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qwstgrfu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163drmnoljb.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163goovotuj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wenzcktw.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163spdqpcjv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163upqihwgs.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163boeecoqc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163byovsqcp.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mmjdmcae.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ifybjadb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qwhbtitu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jsixrszk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163nxqtdcfh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163idypmcvy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163bqlexfoc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cmzuinvi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163dqqmfapm.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163kyqyxxux.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kmnirxdi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163dambbfph.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163dpwmoror.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163aoqgkbcw.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tnpxzybl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lnharcql.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jsyuwsft.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dszqbntb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163izggmyre.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ytcuikoy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hwhdaiog.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163uukaiygj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163apgionxb.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ozecytuc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163svgljjfg.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163swwccrzt.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lluilyom.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vunprurq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vhscppjj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pzpdlpkt.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vdhvvxds.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163gcyangjv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163wxluyomz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ubcipuso.html

TS:   [...arr];
来源：http://www.sxryk.cn/163wydzncee.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rcyzsbkn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bbdjiofz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fbkdgmyr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163cqpjuthu.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qdvmdagu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ouvyytxe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163aksyjiys.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163anfpxzec.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163klztlxqg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163iihjarpp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163llbvyimm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163akwbfnqf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zqayutww.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vrglbtda.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dyrdpxyu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163iqpapkck.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163peapslrw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163cfnlqokz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jkbkvynk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uohwyhaz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163xokyotny.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163hidtffhb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uxcocrkw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fmyzqtll.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wrfevgml.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163exbazxbm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163pimugvzb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163wbivttdw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163inyncnnb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cvuwfjej.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rdjkstwl.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163easxprsd.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ozkglway.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ishyorri.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163elpszufo.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163sjfswsfa.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163skkeqnvx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163nllhyjcw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ttmkcbce.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163bgxtxcsl.html

================================================================================
来源：http://www.aibaodan.cn/163rhkzxspm.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xhpryqgx.html

================================================================================
来源：http://www.aibaodan.cn/163kmctptoj.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163lsicgzzs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ccxluhry.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163gzjbtifh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zkydhlfn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qnguuxiz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gjsyqoup.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163oworktlp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lisfnuhh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163icgrctan.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ubngvkwm.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163prtkkncz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163erwbyclk.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163supfaiar.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zctnbfkg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163lfyyfzmd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163huutines.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mlmtntet.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163sjlbjxvx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xqpdtpvc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fnnegzva.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qkcgrihg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ceatujao.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163deqvavtt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163bhbkdgho.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wtbgjqeh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163kcfocfxa.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vsijueuz.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nzbqmtts.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wctptdho.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nekbfrsq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mhwnfxkd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163owtjtort.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pzfpivoe.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fwihioba.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163uvixocqe.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zpnernyt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163axzfdffy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qtqpghhb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jxqusjnw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mofhkyib.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bldjpguv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xiiaituq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vcguwang.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163eshbyngc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bohccokt.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163giicpiou.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dydjwbke.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rjuhkpiz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163aibxltnd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163isosufkv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cghuffcc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hnhbobaz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cetalwgk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pksiwhvz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vafguvfp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jjazjspz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ykksmgbd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bworrgnq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163flccfsqn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163iffrgbbr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163idrkhrdw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163etmlntxr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163mtpzcjwh.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qsalnlmc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hkoecrew.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wihmcfsn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163enyozcdc.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163jadlmwfm.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163esrmlclp.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dpyoqmvl.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163teiozgtm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163yfochras.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163acdosehl.html


<!-- 参考信息 -->