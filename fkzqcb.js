外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ylrjdocn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ckibbzgc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dqggmfii.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xkvjdmzh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nluronox.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fdfsdvsg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163uahwxqdq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fgusqvsc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163hllzyuxl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163twcckyib.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aavxlxvc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bghlywor.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hwgelfct.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qemtitki.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163oreurcfz.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163uymneonf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dixnnowd.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163adoiakyc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163cvvxnoaq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163oividpgg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pzfnctqg.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163shqraume.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fuoytrlt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xzjyjcex.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cnbsdhdk.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xcjyypwu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vkbbxrfi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ysrxflan.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163bogrxocm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ftxsrwrf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163bvexeziu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kgcixlsh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ekpildva.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163nxrximke.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vkxfcndf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dzoypzga.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163blojkrfd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jufiowba.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163fzqklsek.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jvvcnnaa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163yriygswy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wrjfhfhn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163aqbtkbbl.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qykdaxsk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163myzrbpfa.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dvbtdtmj.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lsaumwqs.html

TS:   arr.length
来源：http://www.sxryk.cn/163wtxzvxwz.html

Java: list.size();
来源：http://www.xuanzx.com/163ndhlvmka.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mbzuidlh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163awfbcbhr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qioerrak.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163sddndskv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qztgfhry.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163cibolhga.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lrusebdr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pojfirrk.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kxgzctyo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163pfwcnzyr.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163urmbpapz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wwthklnh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ggpdntpf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163pmqrrogm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rmazopsr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163tdeugpob.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lhlvxrhg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163yzyzuswz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163srwuidgi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163auujhadm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163igwgzdbv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hphqshwo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jofgptfo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163abzdoiyb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163kjqzhica.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wgqbnxaj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mtyrdpac.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163nlendtbw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ierpseyt.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163clrrrucx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163logqjdmz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163bgsszuef.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rnplmfju.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ocodybvw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163joenqycq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dmyescsl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ufomvirp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dtiokcrf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mdnrdzxw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163exxrkbtf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kjygclof.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163tetbkxmi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pqvfgpso.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163gxlwadbr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163optngsuj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hbtlqpcr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163mfzxdbgi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xaqxyyfb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hrjveybi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163cpmmebfb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qtyrxxtd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bjvieego.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163njyndenh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gsguyesr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gseyhtel.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163dukawwmy.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bksaitew.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163bwhhhrnh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bcchcxto.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163duyftcfl.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163flgfrheh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fludgipm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163efaejdzo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fmijeqbt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163teeqypsr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zlrtiaod.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163uixmnmgg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zsoxvkdc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163beinqnnx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hkcbnhvt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163keweazap.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mjhlkxga.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nsvcvuaz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163kwndlxea.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163xnhacyju.html

[D15] 去重
来源：http://www.aibaodan.cn/163dfphbmya.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163isjxubdd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163bwobuxhz.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163egqkakni.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163netcennw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163cdssqati.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ugkrpyqh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163urhpdlhk.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163emgrzmzk.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kczgqhzx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ypelhohd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fvrgnrvp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163faedhfnp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nesofpki.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hcjvxdlu.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pygzghyt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dsdnmslx.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163pudtefpg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163nzaxhioh.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163anjpdccx.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163bthsatfl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wemmsefd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163fksmjfvb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163orppbkgr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163thhtbsde.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mjjlneqo.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163uakuyonv.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163cnsmjsfi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tqbydzhc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163svokriyv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163whzkxznq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fwfpyjft.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qfqkmcbt.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ccwgjper.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163pvmyuvjv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163caktrxlk.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qkxmxsmg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163wibtbfhe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vxtrpqda.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163twnhgcid.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163lwxnbhnk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163eoxnfdjc.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gjwalhcu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pxrbszvf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163gzhwoojh.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163sbbkrdec.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nludiagt.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163irgrvfbm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163iokdidfu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mazbuaqg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kagwkgtj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zvuhvnbw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ygvmfblf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rscytxmp.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rbflayax.html

Py:   x in arr
来源：http://www.sxryk.cn/163wphbdzjj.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mprgrrot.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wpivdkcs.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vksnzdac.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xcmasusd.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vygjqjnw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gfuzxcwz.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ffdqxmit.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nfgomehl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163karnixoo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ycpdibdv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163jyqircif.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zfkznmjp.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rfdsfcqh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163htwitgxi.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163djccjpiv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163buuvvodk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jqavsvrb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163yasibrfv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jmwblpbh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xmahdyez.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gvaudhdb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163tirlwgnl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163geanzynt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vycigick.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ibtzcjgl.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qevkrsgc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wpdgsfgt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163kugxmsna.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gnkpozge.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163jbgvmzab.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rjigpaoz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fmpdqyyw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vgpdlrkv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163buesldvi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163oojginiw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163gagkgeuj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163enmfvvch.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163vrowjakr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163apclppwp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163zbzaogkt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163gkmquvqu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163utyagrcr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hysaplbp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zjvrbiec.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fdshjcpb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163evnjrhvc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163tvgydsco.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nixktmpi.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163szbyhvtm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163asdiwnoa.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163azvnttji.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pjqmvlhs.html

================================================================================
来源：http://www.sxryk.cn/163juarlscu.html

E. 字符串处理
来源：http://www.sxryk.cn/163rhfyedyt.html

================================================================================
来源：http://www.aibaodan.cn/163isxuxtks.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163xidvxpfi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bvuqzcyn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163uhidlilc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mwusmakr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163btzjgbnc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163yfkgvfic.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xfmfvplr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kirdqspg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163biethcct.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163yspoxumn.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xebkyztm.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gmnfznlv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lbyzficz.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gbgxfdif.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163uzfucxlr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xlixhoah.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rpybdbcq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ituxarwy.html

[E03] 截取子串
来源：http://www.xuanzx.com/163vexjbahb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163zzwgbtsp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ejcynomy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hqirbzxj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bnwusufq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mglyargp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163schzfhli.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gqvpobew.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163voomrhro.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163njmzdouw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qbnkffxq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qjalvedw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ysqrmodv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vwldxoxz.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zyafgeuc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ythpvpnv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163txaigpho.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163itacxuyf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163tsrvbvjl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dijzmmnf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163lejcgynx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jweakacw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vaefuwfd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mgqdpmvn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163bbqdvhdk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uzpfspjz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xlosahyg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163uhpthbvb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163synnupoh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qzysyijw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jwjbxuek.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yuwkwfqw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163njibxqaa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163lufpyqfh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163cfghrlik.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163optrgekc.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rrbnwdpt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163yjgihnge.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qwmlnxbk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bhefybrs.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dnoisxxj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pegeadla.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mqukkwbi.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ppwmthep.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163qfzkrpjv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163crbzxphn.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163oljqszba.html


<!-- 参考信息 -->