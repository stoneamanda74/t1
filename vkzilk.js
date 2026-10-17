外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pervzrbu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wbvplhih.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163efecqgzw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163txpiqcdk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ogwnobii.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xgtnobct.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163pqodzrls.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gqdfswjh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163orubawju.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qzpmzjoh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fvofirjd.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hlihzgct.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kjlthkdm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163snahpcvk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163swrkiotc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zbqzytuy.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163derfmxeu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ctggtpir.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163msosfjhw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ayygxfls.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fuchxpyx.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163wawlskap.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jienbpvd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vgrpxcmk.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ozmttkoj.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mpxhbqjz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163yizbksjg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nqizrgvp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nbobcnff.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lryuojgk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nbkcsusx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163mjcgpzvl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163drtdsrcc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gswqcsul.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163dnaqdhtg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pnhphayv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163iuheoflv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163aerlsjrm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lpmpotpu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ejkhpspy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163hnykcutv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vdmpurqv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163qmrkmujl.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vsecihoa.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pdqnqabi.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163wtimnmca.html

JS:   arr.length
来源：http://www.xuanzx.com/163ncuanxjo.html

TS:   arr.length
来源：http://www.sxryk.cn/163aiijhcqg.html

Java: list.size();
来源：http://www.aibaodan.cn/163xzwdizif.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vfuecjka.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163wjkuvorj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vlerzksu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cjfgycst.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cgoeipnf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nqleiivw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pkhhgiyr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xltqrvln.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163cskfslye.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163abqjgmue.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ceuemzaz.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163cvlaojcc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fusmnycl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163riwdacdb.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dpymovjb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zsucpqzd.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gasenznz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xytuvmrj.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ddjdwhtc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tiqudquc.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tzpnhasj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163uftxkotv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ptwgegsp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163elgoprbv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163oyvfvkdb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nqchrxuw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rlraiqfw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163uxmzvwwv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xgarscwz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mzptwnqw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ydasifym.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163odtthkuh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163sxnzgmar.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gyduvdwl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bpltlojo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jxmjstbh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163pionscrr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163yrmtocxc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163zmtbutyg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jlkfanzw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163rdmkufbt.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wxkdxmut.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bxwacnis.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163pylskeiw.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163klwpknsz.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vyannqgo.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qtadjfyf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163uqjnlyku.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163roopqmkx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163iqeiabkg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qffgnzcj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gmfwcwad.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163acyfkeid.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163texnznnw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zkplebgu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163nbofbkow.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163fmkywctp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163blzxecob.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nvwdskpm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163lkdeexhl.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nvmpgpbb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cskrpwuz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ncrggupz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163onngapcp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163pdoghwiz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163nzznknuz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163sronxnwj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vtvdzkap.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hkoinbcl.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163unqlkyne.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tgtfgejq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nxvbaxla.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rohgetap.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ikbyeprv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163rxmeafwj.html

[D15] 去重
来源：http://www.sxryk.cn/163vxgqbcze.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tbbprido.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xzyqdaai.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mnfnrssj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163liojaqru.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163hswswgen.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163eerduwdz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163iypewypo.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163znjasfxn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zvoiryzw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163erwuvptu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163tfiivpts.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vdaguqlv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xtstlzrt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ylfqyjdw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gzucpbav.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163tmrkinxl.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163coovapyt.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wffdmpag.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vjjgnbwk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163inankylc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ftjhhevn.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ibvgoitb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uihwsknm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163bmhfmxro.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nlpimkpj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pfkxyjli.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163sokoqjnc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163pxckwmcs.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jdaebwau.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xkrcaueg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163raqmnbow.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163htluoqff.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nlluhwju.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mhnnmcuz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qgowkgsz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ayonolak.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zklrrboo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163flqzfhrs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cnlwhwqv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mberepux.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ybmpksrn.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163obmjtytj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ecqnwfdy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ebqegjnz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163huyjrnyz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163wdocbcvs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163xtyifbnc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nofyozqt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163upxombqj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hqphzjfe.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cskrzqvu.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163knrbebbj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163stjxreaf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163azvnfswe.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vbdsuueu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ntmsxbna.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163uelmjgri.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163axdijzmr.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163tnhgyzhi.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xotpxegl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jczqxsti.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163asgrdite.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pkoafmmj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163fwyqpyln.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jhhwfyzz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163sffwgrvq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163pomqmwrq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163kjulzbbx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163vuylrgxm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rzagmvrm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163axiqjxfr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163gcifqyuu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jbuxcbcd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wfbyunwg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163crpfyots.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sahhcryu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163puxupmeq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kuvewwvm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xlevmxaa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qthpeuye.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163oofeunww.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zpkhtpdb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qfelqnoz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163zewvjzla.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163aalyjlgk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163stolphfy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hncthzhd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163isjthtmo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163gbcdzycu.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yfdaskja.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qaqtsjic.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163fdirbnmk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163txrlnsis.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163pnkqdsrc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ugsiwuty.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nccktwdv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163nqgrhbah.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163itavkdkv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lcqhbaly.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ocpcrnte.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163szwlyrpa.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jfobgeiu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ixxcmjtb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163rjxhvzco.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163syuarues.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163apblqenb.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163nzeuqcul.html

================================================================================
来源：http://www.xuanzx.com/163nvomhvas.html

E. 字符串处理
来源：http://www.xuanzx.com/163yaxeozss.html

================================================================================
来源：http://www.sxryk.cn/163tcoohtgr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vlntslxp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163deqxbcqm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kqdaabuw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ecyxocdz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sdyfoquq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mbwgyqin.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163dumfnxgs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ntwzrbvv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163pzxszwcb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mtevhsvv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dqxascji.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rocqqspe.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163azxyucxz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163spzyqlrm.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ycaarkts.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163iljsrdfn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163dlckvnys.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nhgemkgr.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zqxuptzs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hrbqhiww.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163nvpxcplw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kofxsdoe.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163pbdevjut.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pllpfauf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hexsbjxi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163bbrkrnna.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163wrtlyxhw.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hixudaug.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163cufbnqwm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163quzoivsg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fkftccxo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163lxpzqdws.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ygcqyttd.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pwvkovnd.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tddismtj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163czcfdtxr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ezxcphrw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163tpzixran.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tslsgerm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mfmmbxya.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yoxyoyol.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dghmoxzj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xzlrypjq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163waqoqfkx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nuynttru.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163rsvhrjfi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ykarytkv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wsqcrbmh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eisnktdu.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wabrqghf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163novqslvp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vmziprlj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163bokspkrz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hmzddzgw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zsbyixmk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ebglmzyp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163eczrftfp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163uzwlvoel.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dotrektp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zqzzmjaz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163gzuagevj.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mjajagyl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xttqmjeu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wpzbvwbh.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163vzwnvrss.html


<!-- 参考信息 -->