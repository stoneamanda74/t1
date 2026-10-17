外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163brwgbbqb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163kxwbhyvd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yzexblkk.html

================================================================================
来源：http://www.sxryk.cn/163rkkztaxh.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vvxztkef.html

================================================================================
来源：http://www.xuanzx.com/163jwmeqxaa.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dlyoslwg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dxjtfmvu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163oehepjlc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163cshiabkw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163brccmnvb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pxggugjj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wtugvyee.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163knxuedpu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163gosjlogf.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wkyjenoc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163kgwntsfn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hivmlvck.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xewztzke.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163dlschhjn.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wgjzqkez.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163bbiqjdbr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ewpvdldy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wuclleas.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163trzsfeuh.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163oxuvfqac.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163komcnrgo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ckcswgku.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vdazusqw.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163npnchgch.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rnyhirqs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163eruvjais.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163qvtyiuqx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ypqvwrvf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163fhlbsedh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163yhlqkpix.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vxsgayyh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gchotnlo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163emtwsagz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163awimexwp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xyvanbfh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rhuoqixg.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163qmirfolr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163enrdvkhy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gezgvkan.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163utfnkogp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163fbjejlhj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wuobpkfl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163liebeinf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ggizkcoa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kjbruoeb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163cjmexrmp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163inhdishv.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tcgphmkr.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qsyongcs.html

TS:   arr.length
来源：http://www.xuanzx.com/163ikvcuqbp.html

Java: list.size();
来源：http://www.aibaodan.cn/163kgxatiei.html

Go:   len(arr)
来源：http://www.xuanzx.com/163wmjlpmqi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gmqouqyf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jchnktsn.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nostmuxs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163xzpzsepy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163lsoowlhh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tgtssghr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xupjoyrp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ckpuqxkj.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163rjshiulz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163omjgsfqb.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zpqjfxmv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163lmqvgsok.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vrszmguq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zzgkybxi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rqrmfmzs.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163xvxwfebd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jyjoxsln.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ttavxgrt.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163jyivwzud.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wapnwlvt.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163frlxiyol.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jrixfncy.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163lesqddoj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163pcrchlpg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163qfchkqvk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163bxiyfgup.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zjnghuuh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qfkaeqoc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jjpimijh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mwkfxnkn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ohkpkarh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ezuhqimk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163geqfgjcj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163oycwukcy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vgquztks.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163whccdutb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wytaichh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163fcrimmwd.html

[D11] 反转数组
来源：http://www.sxryk.cn/163khpthffg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ebquvnno.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163azekvlqc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163eafitxjp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163apglxmiu.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rsrbjflh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ahwrquef.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163nmelhapo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163qbugjwvw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163pxawfnek.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163piduxxed.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gogjiuzl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zcqarcol.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gxjkjhrh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163rdlqsfha.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163snjgxsxn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xlawvukj.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163zlkcctxw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gmhlwlwl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dfeesafg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163skabmpyd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hjdiytfb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gfdwyanq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vcyuqfug.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163amzfffgn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163dopgkddl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163yrspaixv.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wnfhhpfs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163fkdoniwo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cznacdta.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mzyhqmml.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163aujnsodc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tmuaucxr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pkbfjjtw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163skuygsqd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rhyhvgpa.html

[D15] 去重
来源：http://www.sxryk.cn/163uxtzerax.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kxriwyjp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163gbakrsfs.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vintvxow.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163myyhvbrk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163kpyruxpy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163maohwxcm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163revxsqzx.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163svcjyzzp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163cbyfqbup.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163jxxuwnus.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163icjoesld.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qhxnuwsa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ougjupuu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ozypmjwk.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163uahgkknz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163wmrvwxlg.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zrrjeqpf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hvmjctzc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163txgsjmja.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wcoeuqyg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ozczgfld.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163eqesbsvn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zmqnztpd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163nfkjapdw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163scslijtl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163nxdftmvv.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bhxewmgm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qlskdycf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163kvnzuqbk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tvoixfby.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xpckhgvw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163frpsngqi.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163axeqndpn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bmlxqdoe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163axqjuufg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qwirxdoa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fshmkijg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ckzhauat.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163muuekzcn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fmytmtzh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jgtpwije.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jeebvyly.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mtxwefzw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rwraoioq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ahzjvgid.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163csxrjkin.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163mefvohjh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hhbasxis.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kgmgcovj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163avicvqev.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163znbwkgyr.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ieobijqb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wmfmrchu.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163irpaxcva.html

Py:   x in arr
来源：http://www.aibaodan.cn/163mxdhdosd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ilwescfn.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rppqozcg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163knsmelzi.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163vbfmztiq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qonkceon.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zjzfuuqs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ksrmrhmu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qlejrjja.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163fnfihjxh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dxiawbrv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163iuyvfonf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163edlstseq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ktgauzor.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lizabvgl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cwnswrju.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163heebkcfd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nrnughls.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163dlusxpnq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pqzmwpaa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ceataswf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rqmpamgy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163nqkpkjoh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xultdozc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163onboovjl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163llftsvkm.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163sxkhvhyk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163mxmilplc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163uvbxpjon.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163wwqwgahz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nafdnrkv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163teajiiqq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163upqkncro.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tmwvvvab.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ptuylvrf.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163sifvalvk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hzeipexg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xqdoinqm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163spyvsnex.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163uisbqfsm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163halmrcbz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tdypnath.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ehmyennd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163pgrfyesl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lftywfqw.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163sqpnegcd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163endpkxgc.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xzvbtqro.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163liigqluy.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uszhhnlz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163awbcjpxy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ykuydikb.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163itiprely.html

================================================================================
来源：http://www.aibaodan.cn/163upoqtdut.html

E. 字符串处理
来源：http://www.sxryk.cn/163svctlbpo.html

================================================================================
来源：http://www.sxryk.cn/163zgedyrzn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qppzlabe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pwbjoyzg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wknqkngv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nsgmrwag.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lskxdysh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wegoopsz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163vvrbmycz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163pabemhcs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163okabyyrj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163tszkotpx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163julrqnqa.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163sitvjniy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ailddctr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nbfecmgf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ftalltpc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163iltcyrqr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qsorcrzu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163jykryzvu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163gxvouenl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163aykfznlf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163xvaklxiw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mdkiyfjp.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rqzsmstn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163tlinzneo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vgshmojs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xjicfetp.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yxvxicvr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163szsfutdw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bhnxaqhr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163hhohtpmd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cesaaqye.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163syhnozuj.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ejemgvyb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hkmohekv.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163cdikhzda.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163htyscdcp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163irwwpple.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wkrwlerz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kgygfvdn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kvzvjcnt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163soxcnnjd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163oswocpls.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ylyrizqb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163zxgcnkik.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ndprrgjz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ukngzvpl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fmpbwwnb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ljlxaoxu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163njyarsgy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tgimjfpw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tcjrvtje.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mqlkpjyn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163lzppceiq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163xamgqkkd.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vzylaorm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pvafgarf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pxqcfhdy.html


<!-- 参考信息 -->