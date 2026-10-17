外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163xlwppqtl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pzraoclk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163pyctrymv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mdqdbmxo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163timqnsan.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jucxyldl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163dxbgfinp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163bosqepkm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bbpnuuew.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fyjpgebk.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jcrwukho.html

Go:   // 无解构
来源：http://www.sxryk.cn/163uifjzeou.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xboxcpxf.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tubdxflf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uovuugow.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163btppbeck.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xcbcqmbd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163nbpimsri.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pztxmdht.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ghkddoil.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vsgkjjma.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163deqedkti.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163esqqveln.html

================================================================================
来源：http://www.sxryk.cn/163ufecsymk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rovfpezs.html

================================================================================
来源：http://www.aibaodan.cn/163msdlydqc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gnnzfcaj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wyevzojr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163cinvqtfz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tfdspnsq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rlmzscct.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ascpkopk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163uczghfbb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mffcfuem.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163pvrhsrpr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fxobblkd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ilirnmko.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163uxrspdsz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ipjchtph.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163gtrnbpsn.html

Java: list.add(4);
来源：http://www.sxryk.cn/163segstaqq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163hiymvwkn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163savqkgav.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163msjjhgos.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ggwqnzcf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pwwiazat.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xoufgwvz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163memsutjn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163adthanwl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ldrdktik.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163iwtfhccj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163npetlhao.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kfgrlthc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fgwzrhrn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163agymxzxj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mbeqlngq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163sfvumzxv.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163faugqpgs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zfmnjifn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163zokvruqz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163syxrorbt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163gdjnmpue.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qsgxuqhr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163idpbxnjf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xmuqgaxj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hwgblzma.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163klsbiahx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163unpydivd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xztydmkc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mzjwfqii.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mzkvmogo.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tcahdztd.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kpdxqogk.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163nwjksphg.html

JS:   arr.length
来源：http://www.xuanzx.com/163fkbtjdkd.html

TS:   arr.length
来源：http://www.xuanzx.com/163kggcrmbt.html

Java: list.size();
来源：http://www.sxryk.cn/163uzgnnnls.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pmfszgup.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vetobklg.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wqjssnrf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163upmpxsxj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fhlqyibt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163tpogpvax.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pwhuhklh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ppcbogad.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163tjgokjzp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163wxspioxh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dsjkvwxn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163guiytixu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163dvewthpx.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163akwrmiuq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xipqnymj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163atmxzgzc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163opldihry.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zgoouqrh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hyxdgpir.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vfpduwdr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163jcpmofbg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163cpwbpsil.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nwgrkyva.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hfoeqhti.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qulefiwb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163gpdhppnx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nrscmrng.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xchqhepo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hyrkhzkb.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jwnocckk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ljfkxpcd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163gziurevt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163oaquljyd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dclisrng.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rwasnjzz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vpftakbn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163bougmqzj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163asyajqao.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163sbraqdzw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163enlsnkar.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uqzohukk.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wqzvfkgv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163yessspse.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hjkeflvu.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ygpbetao.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wibqkbot.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jezfrvlp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ncbjeuez.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wuspfgev.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mgjdsulh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163nwsgbmuw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bqtueptj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hmkrxusy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vedpxvoj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fcqnpjkc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163reakpmya.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vxkkaaaq.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fjyjbxbr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163bohysowh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163bkamhzzb.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yuppfrha.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163djspxjmv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vxqvpyiw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ywljwdin.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163dwfkvwqw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163cbevymrz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163elttriht.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dicomlnx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163apfomnzf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dybbtdub.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rbwwshka.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163mdhbbkxc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163shwashcw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163flhsadlp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xhnsompx.html

[D15] 去重
来源：http://www.aibaodan.cn/163cqsuklpk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fdjcsuka.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jivjigfk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163sswyhddu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nisvstao.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163gpoeejzt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kapdrfto.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163okoqysib.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mgpuovnf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zbwuwlkr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mqeannha.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163mmtbkeij.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hxjrftec.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xhgqxcgx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xhchozqs.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163mbgbaail.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163gskmaanl.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qqejoknn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qxojrtql.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ohkscwlb.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163bbbjyxis.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163tcasvqga.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163vmezamte.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nelfipxf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163phwsvgfs.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163xzqzejds.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163usyultqc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163iclcwzyl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163hqakpkdg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xmyfdeeq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wqrwnbkv.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ohxevxqp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xrabxhii.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163tbummtte.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qxldpnjb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163orneewyi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163krgddnfg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163iflqxtlr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zvmqnrgi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163lwmbklzj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pckuccgx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ngihlvsk.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163yjidqeih.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163quuykyey.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163etovuuoj.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vtkmnwxh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hftfbkoh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163itrhqdaz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aavxzjus.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163djrpppgq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wfskaphw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pikjpltj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jdwhaezl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rvwlttxt.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lgcjlsmh.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jwmglknm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163uhjqyaly.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163cgeqinkr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163noovaxzp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163imnzodcq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vwsikuzo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163opxaqztq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ecmpvtri.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lefqvuck.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163yluwbqvz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163kkebekcd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ickccond.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xfondnnw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163peunelrd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wjdmatjj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kgolaivd.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gwksjkao.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uowstqud.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163qglbxeut.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163aofqizrr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163btxdotoz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ytybtiag.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163urtftpmi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yytqoevs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qktcocxe.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163iwtgxfxw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xdftllry.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xusmshnd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mudbxmas.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mhayliyh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gehlavsw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tiihoekr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vtxflvxd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vngreabw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vpxatexd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163trxhybun.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xnzuylrd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163yzwupdat.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163pvtkyzdo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163kkbqrejr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163coxjbaip.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ahewtccm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xhkzklrt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vhsacbvb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ocggclxt.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163xvxuqlzr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lattakue.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163veijzvrp.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163fgankmoi.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163snzvzjlx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wxosnlhj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163aibxbmgg.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fqssjfnk.html

================================================================================
来源：http://www.xuanzx.com/163bjvrbkda.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rfdftlqp.html

================================================================================
来源：http://www.xuanzx.com/163khuurfbb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jbpylutq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zadjfvmg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jeqpvmgh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ypjirido.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jwbglrqa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163wfgktsuf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rdofxxyb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163upiuiqzj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bmnaedrl.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gxqxvulh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yfhjpsxq.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gwbekxqf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163sibgipcf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pvahgjjq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163asejuyqu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ehddtzjn.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ychhvges.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163prpkewcm.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jlrlbbqj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ewvaxdre.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163gtcnicaj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bzvrabfv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hxxtecww.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163hyappakq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163limzegcw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jdaviivf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zwczkcyl.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kgwupslf.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163oydjwobf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163rojhjzxm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dpxpsbon.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163cnaunkjt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lhwgkwdd.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rmxrpjag.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ffwzfdyx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hoyezypj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163scuzisqq.html


<!-- 参考信息 -->