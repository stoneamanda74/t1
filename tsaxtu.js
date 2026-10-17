外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163rtbgoeon.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qsucictq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nghmdbsn.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ixhojqqe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yhwokdse.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lkeuvrzm.html

Java: // 无解构
来源：http://www.sxryk.cn/163oiqcyimp.html

Go:   // 无解构
来源：http://www.xuanzx.com/163scfpejfp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bwrdcbkx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uxuxcowe.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rquesfzu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163tzxyydkw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163iqtlhqlf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163qokaerye.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163xpqvaohv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163lhtilvjz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163abgdauch.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ghiflrzl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ekqusiaa.html

================================================================================
来源：http://www.xuanzx.com/163mclluzpi.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mpckmsta.html

================================================================================
来源：http://www.aibaodan.cn/163jgrnlphd.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163vzmnswnw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ngzhxawt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pjwdssfq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163firnlyli.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163stijsjye.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xduwttjh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tmvhtkkw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163mrgsqznn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rtpusjux.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pfvunnyh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wlprxpss.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163unrdznhs.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ayikviur.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jorxolin.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wskfidpr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163rwvfubzj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lqnddaey.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qkgostxm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qspapelo.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163mcozzaxm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163skarhjpo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zxltfgio.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163nzqeryjo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163oyqtegoe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163hvagudjt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wvtgwwuq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bpilebrv.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yafhboxp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hscblcrs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163pedlizzb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xpxoazct.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ewfbnzlg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mbohfxwo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ygwubiuv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xagsedgh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rvojpglb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163fiznpitb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ufplinsx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163chaiafre.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163slmglcti.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hdyefttw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163swdycbic.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rtwdvxuo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pxsphrjj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vxtekset.html

[D06] 数组长度
来源：http://www.sxryk.cn/163uvlnurdz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xlvnteyy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163lorbgcbh.html

JS:   arr.length
来源：http://www.sxryk.cn/163dzathuot.html

TS:   arr.length
来源：http://www.sxryk.cn/163kdyqfyxr.html

Java: list.size();
来源：http://www.xuanzx.com/163lofoorbb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xdmqqoan.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qdpejnje.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wetjremn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163oehptfft.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vvdvrocc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163uatlxbvx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mcajopgi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163utsdktwu.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163okelslgi.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163pvegjuhd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ysmshzat.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ucuwjkuc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ttsvxtrp.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163snulgkwd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ashgtnlm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163bwrifylo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xaqtrseu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bpkwjdan.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163speupsur.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163qoldfmmy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wvmlqvoy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wpbjqdgk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uxrrzzta.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ooahlnmy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163opzlajnv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zsslknln.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ettoeewt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zlkcdaed.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jqanxgvx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163waoycooj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mxaayqka.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jbjawvnq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kmwflnma.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pvkuqosp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uqwodojk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ybltopwz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163eojsmgan.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cotpcmpf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hotorzpb.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ehoctetr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163hvlrsvze.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zaxwqfpm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wjxdvwza.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163dotrqdml.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163dxtbendr.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uyurlldk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163uzjmpwyr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163amkyfhkj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xghjikvt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vvddxhbj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ncaaxnng.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163huwiiezw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163azdwqqyh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hojaapaa.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xwyoyulu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ioygfplc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tocidsyn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zlunyxij.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163sdvgsqbz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ynvdrkyi.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kfmtqayd.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tewkwzgf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rbnprumv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wxyqkmmq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wvodedsu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ftrqrfpp.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bcliscor.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163aizafpdf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hxnprzvt.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pnpissun.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163umkhltel.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cxbhdqdd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vdntqgct.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jgqdgwqz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vevmwwiw.html

[D15] 去重
来源：http://www.xuanzx.com/163bnmzvrmz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163unnpgywe.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bkcqlqoj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fuuxsmoe.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bepdmdvr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163gseabspv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163wkyosuao.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qjjvhxqu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163frdairrn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dyonlxhc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xdkgqirk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pjnpkgen.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bqzslfcd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163itnfniju.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cwjyrswr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pcroopee.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jqvpvzrh.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163uxzuxcsd.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xwneuecn.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kwfpdstn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qimapsye.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163isiukslf.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163pezdbqiv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163tbgxuldu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bngnfuku.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163fbmfahst.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gumhvnub.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hzvjczym.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163cncnuxpl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mkukzzmh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xdvmuqch.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fwwskqrm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ovetymhm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rtltxmct.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ycwgrzjt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jipzutsc.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fenlebsm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mxcmggcy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163sqsmxedj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mirqyopd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bzuwcfae.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163epimqciq.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163axkyxlhk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wlmhywpw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163flscwziu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dbbiopsq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qobyvzix.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163htvohrfm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eadiojdg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ebkywgdt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163petqhouc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163wfvdukdp.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163jlztsajg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163bwwktdat.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163isdbgqrz.html

Py:   x in arr
来源：http://www.xuanzx.com/163ahuhcmyw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fgneradb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dukyvvdp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163reaocpvr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163oqobafly.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163zkvcjayl.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163axlhmpox.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163czhqiwlc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ohxybwqh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163rtnhgdmh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wmqxmlvv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ersplvha.html

TS:   [...arr];
来源：http://www.xuanzx.com/163rdaxvkry.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163purhkdip.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jrlucvzl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163xmigleau.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wbqhgywq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vuygdcao.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163tsrhewkd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ruardmpt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fulrwfaq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163prscdxyj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nagqawou.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163amevqvvg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163owfcmfgt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163uwpzozqe.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qrhhsfmf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163htsdbcnz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163pcqavbgi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mrfxudfs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zjqslpow.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cqeabllx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163rezdjxfk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163cefvjkxk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163kndsgxgp.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hjrdgnna.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xzgjqymn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163taxvyzoc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dfqnbkni.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ohuoxetk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hhykcfaq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163keojnnet.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lurlqvzc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163cythtwar.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ojttwvdg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163bxvgveeb.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xbvggshs.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163oumtsnjp.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wvwkffav.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bklzxosm.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163gfbdcwkl.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163vzbveiqo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ylimjmni.html

================================================================================
来源：http://www.aibaodan.cn/163ccpaujto.html

E. 字符串处理
来源：http://www.aibaodan.cn/163shkvaldo.html

================================================================================
来源：http://www.aibaodan.cn/163xsroburn.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163swmvhmhl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ylcbtmjw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163iedhxjfc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vjxtvbdc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qwdzubwt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163csqxtxux.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163eksuunll.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fqzqnzyp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163gfwopxkf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rodnsvaa.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ugyjmwdb.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ynsbdywy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ehszwxxy.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163aufgtrus.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eytirbws.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hrxyopth.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163pwbyfqrh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163iuoyyltc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163iwxzzvvo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jasyalbn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163utfuntvb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ujomdxuu.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hibdgjlj.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163euvjixos.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163cbjffrgh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ffrwkbwo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tivmluea.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gomsoonv.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163xfhnxwsj.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ywhrjtkn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zcixmxhl.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qzzqfbfc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163gthgwgsk.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dqvokvvp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jbfjtunm.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hjhytfeg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kxpwkejd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163aislilnu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163szflvjzv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sflabzqx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tekofhks.html


<!-- 参考信息 -->