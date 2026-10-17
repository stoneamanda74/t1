外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163fttqgkyu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rsyyciam.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163wjoytrqi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163brqvwluy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yrtxtrnv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163pttrxbsn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tanhwyou.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lgbquqhc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163xopmqkfs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gmaaavuu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163aevlupcu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ttudigrx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wlxmuelp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163kydctojf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gmkhcamv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nxndnapn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163zfkhibfu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ominwiwd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163cygcyeor.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zqrsyfqv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vqibveyb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gvnsqkui.html

Java: // 无解构
来源：http://www.xuanzx.com/163ygaqepte.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bkhvblmh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pnfpzasr.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163aoivkbzf.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163cevcenjx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vxmsjyyp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163gfmltfht.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mnzipqzv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kjhfvugp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163igvtnywi.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qtwsfgla.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163plrywmyy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163byxyzrgo.html

================================================================================
来源：http://www.xuanzx.com/163rljdywdd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163degbdfxo.html

================================================================================
来源：http://www.xuanzx.com/163xcoeidxb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163atzsnyoc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163eihfbmcv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163stxuraes.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163opobqlpl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ojsgslhw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163voktwtmq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wiqsfusd.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163miyyitef.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ymqdnrge.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163naytmfep.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163hqxjbwml.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163sjpywcve.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163agosyglq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rhuprwot.html

Java: list.add(4);
来源：http://www.sxryk.cn/163iyymngnt.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pjqqvgpr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pbqoyhib.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mornxemw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163aqyjracf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163nentkhmj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lilmkygy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ibbxbtmk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163cecrtovh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cbnsuldw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163kepialqf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163yocthblw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163nqbpphvh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hyujctha.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ecfmmwsn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wsfaztow.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163iiaepivq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rauyrchn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ytdrlhge.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gqbrewnj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ycuhjclq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163obbilwpj.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vixdsjcr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163esoccent.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163jizozjtk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163acisolsm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163bnxqpfyu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163djoojcxl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bfbhoata.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xjglymml.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163grzsftiv.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vxsxgcbe.html

Py:   len(arr)
来源：http://www.sxryk.cn/163swlhcfml.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163bgmauttc.html

JS:   arr.length
来源：http://www.sxryk.cn/163adsvzquk.html

TS:   arr.length
来源：http://www.sxryk.cn/163dnmnirsn.html

Java: list.size();
来源：http://www.xuanzx.com/163ymygqcex.html

Go:   len(arr)
来源：http://www.xuanzx.com/163spnznwxo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lgdzziha.html

C#:   list.Count;
来源：http://www.xuanzx.com/163cwatrlsz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163olionvov.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163spstecpd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ahxofgkd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vjhhpbui.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bxyjwcaz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rmgtehnw.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163xzlskyfu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dfnngqjm.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bweednyh.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163lcohctep.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qcwtectt.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bufubjzi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jexpkjsz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hnhcqhkl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163qjoxvutu.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rkrnjfnx.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rpsopmvt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rpzjbppz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ugzdbgtu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rlebsnci.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qcwdisxr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163bdnignfn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ppbuqdcp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163aindftcl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163exxmbusa.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vqcydrbc.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163kwmmjciu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163csnpxwfe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wxfdwezs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pdprmtkw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tytcgwiy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xyoynwnm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zgznuamc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163yzseeuli.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zgfioiwq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qdkqtsgs.html

[D11] 反转数组
来源：http://www.sxryk.cn/163keebjyfc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163nskcnxvp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ukdbzsbf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163mrvjpafk.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zrrwtqlv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163iqgomyvi.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163undcrgdv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kdeeibgj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163usjvvpyr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163plzyokth.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163negndwwu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hklzjnkb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yagfgbdp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uhilhiuy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zpltzszc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163facddjvv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163lojpfuuw.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163swsxnlnz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163orymqfwn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163yvcpmwre.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mctahsur.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ddoaeihg.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fuuejvey.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163rqwhbghr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wijnxjuq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qskebloz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rrgnmzrs.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rmuyfjcq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163srzhdlbg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163uhwgnmcg.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163whgtzhce.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rxxymien.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163sxerxkzk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yjpfvyej.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163lenbaybv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bsvqgaas.html

[D15] 去重
来源：http://www.xuanzx.com/163ocnbzemi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163myeijmwa.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ojzpuwcx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163layhbhgv.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gjbpfrqn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163grzxjdza.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dazndzbg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163teiudbuo.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mmztuvzm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163gfqelmpa.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163cauejglz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163drzpcycc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qcruchni.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163eggvaoxj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nbscfaxz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pxtpgjqa.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163cjgmjjjt.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163hfznubeo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163otjyhehk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ubkbrdsp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163csemtuda.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163njqtsakv.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163sjlfxqoi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xoqolhjx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163hsamkogc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163nwsdyjrs.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ibbvoizh.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ntncmyfp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163akgmcama.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pcszvgop.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163stoaocdv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163zswqhitz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163dzeeumxa.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163roovcujt.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163sgzapnmt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qvhyzyuo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163lvzjgdxz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163cqzrqjoa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jkyiojdz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hrneafez.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yflkcddp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163muucbcpt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163uqetebtu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163clgtiant.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zbbalujj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ikuscbaw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163wnmcexyl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163nejjftxz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sirfxdpm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gjauoujo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zawtbuvh.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ccsvuxjm.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rcrnfibl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lxzjjroz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163vjwmrwky.html

Py:   x in arr
来源：http://www.sxryk.cn/163weoryfbm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ohhuylan.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163bjbosbvx.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ifuqodlb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wjduyuqc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163dlbijkwn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163dzfhlrit.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jzqrqlek.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ifprktqp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163htkxvenz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163czvgvbmr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lepojils.html

TS:   [...arr];
来源：http://www.sxryk.cn/163knmjcmqy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163kjakpukv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ioepkavf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163uobgjekh.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163zsqyylbj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163klzecnga.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bxpijhie.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163oxixpsdg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vxbuycqk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vudphpuv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dllzhrkp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nwimlrkv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pmbquiwj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163loqijjhz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jfsgjuvs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jekjxhft.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163yzkmelul.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dhgijjwb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wwoyqyuo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163egweyksg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163amrbloxx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rjomoddv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163nvlxhijh.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ymcgtlnc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163abqymkku.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163exnbccgu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163nqsgtzdn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tawjhrsp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cgasfezz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jrkuxnhw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163tvbavykr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ufnvifcm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rpsfceca.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163uzbacdaq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163anuqcicb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gheisxfw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lpmnnkjg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163cbpkaoqi.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wmrwmwas.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163evwtxzcr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hkfqcdeh.html

================================================================================
来源：http://www.xuanzx.com/163edvzkull.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hblmocwk.html

================================================================================
来源：http://www.sxryk.cn/163vqjxxnac.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163sentkund.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163zvwehkov.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qqnfnyyj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163brbaqrka.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xktpylzl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dwohkwdu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mkpivnje.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163masxfewk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qynzhmjf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rutmedzi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gumfrliw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lolqeljj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rmsmsywc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kjcrckfc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fixvhdss.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xidlwxcl.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kcwxlams.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ahohafis.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nnqzjgfn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wgluquns.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ncftxjbh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pnbjtthm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jnssiovm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ugfmmsit.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163keuuthxv.html


<!-- 参考信息 -->