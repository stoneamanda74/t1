外链999!wailian999！

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163exykjtly.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ackfcbbn.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zeaqsopm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bqzdobgk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163pupvmiqx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wjufwtco.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hkdahbei.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163arqcqtag.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pikrzjir.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xqezzpzm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163meevaohi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163utnnzqxx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mduzvgzp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163dsxczmyp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163clmeczrc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163zvxxvbud.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163lbrlopaz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jhddhrhi.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wgjomeeg.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lkvbdiku.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163twqssvbr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163oznppqkb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ppvyytxi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163aiaybeal.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uegojncp.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jostujqs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gmblqveh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bdvtkfbl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163afgnlfjc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nsoeqpqq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ctudpwqq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ajwatkoz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jkfbxuhj.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163sygovufu.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pqinyreb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rkwwzaek.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lqgcjilv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163spgcakzd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163amryjxzq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gzesgjtu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pwqqmsrp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mmqqpqrx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gccxlpfp.html

================================================================================
来源：http://www.sxryk.cn/163cprtodbb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163pvrxqbks.html

================================================================================
来源：http://www.xuanzx.com/163jpjasyof.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hvmesobk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163tbvsfaig.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163abhnhycs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rpenaxoi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163siooigdl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rsmbyqun.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163miuqvklw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163slvcfjgk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163gxxbyfxt.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163gyfcfker.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ergbizky.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mczhozsp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vcihxeij.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xrhofquv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fuxbjuhd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ilukmhvp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ttylbgjm.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yuiperfo.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163inmnjluv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jjhguxgv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nqvwpmic.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vrdrcufy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163tybpqgqd.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jkrrufmn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lbocmdie.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rhzlpygm.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nmyhrrub.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163divdfqjj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xxvuyial.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qcagyzuk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ujamquxj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163iuclwlyv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dxomflja.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163cqrclgif.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nfvcowxo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163grfddeae.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163piuvwvxy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wgncfoin.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163qenggqsf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pvnswggj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fvcujaym.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163cesfufco.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163mczbatrh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163eqtjnexd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rcvotdgk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163njavakwq.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jplztvky.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cnrdcscl.html

JS:   arr.length
来源：http://www.sxryk.cn/163sodrmoxk.html

TS:   arr.length
来源：http://www.sxryk.cn/163vzfvgxfi.html

Java: list.size();
来源：http://www.xuanzx.com/163khaitpvq.html

Go:   len(arr)
来源：http://www.xuanzx.com/163luiqjwcw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vgdqfgho.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mtuhxtwr.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163aqfpnjrm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163fswrjnwk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163delurmzb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163iorlsfuv.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nqdlbvwm.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lznnzhdk.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163pttktyid.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ndzgxoad.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kogyesbl.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163heldtucp.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ieqlleel.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pycyumis.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163wmizhmzu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hizwetdc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163agqoklqg.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163iwamtdtf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163lehaehkb.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xzqdehxr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ranenxsr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yboasohf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mkuisbld.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163jetcdzml.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163mavrkbdw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kgvufnbk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163oohvxtee.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ekgyjckv.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ymvzfgom.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163lpqiavoy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163usdicqsr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163auwmnwgm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fycicobn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dcwlbiht.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163twutbzqd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vpqzocai.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163imtgcvon.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163dpsgkedc.html

[D11] 反转数组
来源：http://www.sxryk.cn/163uvuwqcel.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xmildilq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bqobugto.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163kengnfpp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163uvsojhzz.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mbvvwlhe.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163pyegrevl.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xjxhltsg.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hazimcrp.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163bvazqjke.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ylbmeqxo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163tnisuqeq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163chaxherk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fdrnwuxk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163widoselz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163gqxldvio.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mcwoeqnk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ortdjujs.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163vkgbaenl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ayqwovne.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163fmxowmqw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xjjfzffq.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jgiotspc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163mmeevhpt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163cwyxstfj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163probsynx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163eykyunft.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tbiuvave.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zhwnobhc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hwelbdfv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nwfbjzgt.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xjtymqgv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163paakfprs.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nqycffyw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dprqmqsy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163txcmwouh.html

[D15] 去重
来源：http://www.sxryk.cn/163zfdpfwtu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sjeowygf.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163emjxpivu.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mywhklia.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ikhitggd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dblqbory.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163osyekfne.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dnqedarl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163alswcdjw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163srlzttyn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163otcadnwt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ffeattdg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uowmoybp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ilmpngtj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xtchyfxd.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fixmnnbf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tsvofqkw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163afajyiha.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uortnyvd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163sexmdbzw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yykwfgfv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jgrbznvx.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163oyjxxaki.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tobekyjy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163uionkzwn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ffungtpn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xeocenle.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163egkelpua.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tsfnzxoa.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pynsyitu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tvoizceo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wijqeshh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pjbictxa.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163wlxyyijl.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163gzohtlgy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163nlfxzgna.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jgttsajf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qkndcnfg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ggeumtqa.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xwfylcda.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kvhwruqd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mzrjzazy.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ljezbhbu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163oaxmuttm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163uacfzflj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163eqaaudxw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qwvofyjj.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163conmbxpz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pavqqymm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nabnrndm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xxoqkmzz.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ngicklts.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163zrmdomhl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vuptoawo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fukodzmk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163chkwlutg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tfhsbggb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mectijji.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163swiuosrk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ssfzmcrm.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jysavgwh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jjvpwjnf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ridizdiz.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163payluzjp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163vcbkwudq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163hhqpkoqt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163tdyliqiy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jqicricc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dhyhyong.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163gqduwogx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163hhmgdlsa.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ouycycki.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163trweuozs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163lqdponwt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kejtaclq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dmuwmwqj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fujoirnl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jgurxnir.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wgfiiict.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mwjtuhej.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zyolclha.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qlodwqhv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tgjxmshh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rbxraujd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wamuawva.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jzylwwix.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163amzhisur.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hbsfchea.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dhdsokfe.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163jhjxnzip.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ahmmvgsj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163harwtdnp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163rmvafrqn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kjxrucvj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163dcwbresj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163titllqcr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pjrlsmxx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lyrivvoj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163svphxcep.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163mianoqod.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ylkujtva.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163wehveimp.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jqhxufiq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163rjvqcldr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xhqixzdb.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pmpfxgyg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tausscga.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ddyrnoyb.html

================================================================================
来源：http://www.sxryk.cn/163apmnlimw.html

E. 字符串处理
来源：http://www.xuanzx.com/163flwmwdln.html

================================================================================
来源：http://www.sxryk.cn/163bzqphtty.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163muejyrpx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163nogilctc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163szqvmxso.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kdkedqfd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yvnovwdr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jfjmesng.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ypgxtrha.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ntqnewff.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qdywtgpo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qrypmylq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163eekbogzx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163fuwtckji.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163brqyscbz.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dfeepreu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163whoeyvym.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163zjzcdjaj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163jebrofer.html


<!-- 参考信息 -->