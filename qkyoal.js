外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tdsfenpb.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163oahcsgbz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wyltdych.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bxlydqkg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jdhevlnn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wsbabvtv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gdxtvypl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wdachfjd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lgftfsjz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163fxlzsbom.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163aqleaqxm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vizbvkfl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163iuwqruph.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gdupcwyi.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163uehyrqsm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dacainfu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cphorpme.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fhujzbpz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163hlilgqne.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163lwbkaijs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163yyqkqvzw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163onsmgrie.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vkjnjxzg.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163icuirwbp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jhiobubc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163shxlcafp.html

Java: // 无解构
来源：http://www.sxryk.cn/163gqkdagad.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pzwkpwyg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163jcvhunyp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qxaemuyg.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163khngqxxp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bctnjexz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jmacjvqz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lqbqzvod.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qeedspxq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xfkvqlwx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163svaedocf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163abpwntar.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xjpqpytt.html

================================================================================
来源：http://www.sxryk.cn/163bonbvysd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163nsfjfwys.html

================================================================================
来源：http://www.xuanzx.com/163gwhejglv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nmsngbqo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cimvtaoi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163mghhrcae.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lyccmqpt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163bjhoqdfp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163vthijsry.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163iscdgiji.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wbbsyidc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163uanucsqr.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163dvgymncm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tsxijkms.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rcezedwn.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163heormrva.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tpdyktyn.html

Java: list.add(4);
来源：http://www.sxryk.cn/163sbqxgwls.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kyznbpmf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163dmfjbsct.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ztrckppd.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tbcoonay.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vmwalykt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163bzanfwth.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163bwzcoput.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fqibnmsv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ucvsatpe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163jpwhulyh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xbqaoxbg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lgekhgqz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163sucnyqwn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163oztdppgs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163pdqczusq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yurolnom.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lvvwdbee.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jiaaryxb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vmmxpngs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gkfyhcsm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ogcopdci.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vklavyyt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ykkpofxn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kbypziae.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ksdhcclb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163lzrwnzpj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163thwkatqb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wfsrhkah.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vexjsoey.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cajwbopu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163sezjpvvr.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jzbxvxou.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163abrlzbto.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tishdifu.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fxuyfnkg.html

Java: list.size();
来源：http://www.sxryk.cn/163ngbwkljm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xsswlofr.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163zqfrbhzm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163unlqnlvs.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qcdaiolt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kdzcqgyh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vlmasyzq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mnpiezhl.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163leiifmaa.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gfeiwgqg.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ngejhhjn.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163bqblnalh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zipsjxjt.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tmighkod.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pthpogxw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163tnldlbrt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163qrrbksko.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163uewygulw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xkjxcvnd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fpprcplw.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163pskaqopa.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mowbdldh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hlrzzlzl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163muzrxjtn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163oozhxavh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hjyxmqrt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xvfgtemc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vymdynua.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wfnxaxke.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163exbdeiyq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jtafscvv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ubqmsexn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fokabazq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163irfmixoc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zguuxavk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lzdvffwa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gmvagayi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qhsnueqk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ovhpjqxo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163goiywylb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jkgyulhv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163exgafjvj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gerpflob.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163iaggxufy.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ckibwkae.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163uuxugeta.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gxgvmsvf.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163fhqbkyee.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163lcxnnfgn.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rqoafafo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163wanhdkws.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pwdvqqql.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sfqzgvkg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hpbubfck.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163cvuokumd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qbocuxhy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ulhcdcte.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ywegwtdq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ksogtqpn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163iydaihfr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kgxsdoev.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vcjqhywv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kyrhpwgi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dqqzxels.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163fktkhjyv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ddnymhfh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163agnqaaqx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sltkhvnq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163meyozwje.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dibsvjrl.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163komekyyc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cifcegeo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zikfiuqv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ciciikxa.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ksjhomjq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163kabfsljj.html

[D15] 去重
来源：http://www.xuanzx.com/163prgmekyi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pbexljys.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ouapqobo.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vpdimyzw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bkpzkeku.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jbycrxxu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kcymsxmd.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pqnvohxl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163qvcwlako.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163feztupxd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163neojtyxd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zaahvmnc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xchxzfyz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gmvbtlcb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163favhzjoc.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163plyoaolm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tiqjizxb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vycuxhgj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qsnurqph.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163plgojkqi.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163pcksallb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ghmzjvlx.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qygglkow.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163irewijux.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bodjlrbf.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cjmwwwsd.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163srxmdnjg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zqocawuk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163axosrbit.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163sfvvxsgg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163zhqkndhu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163blkxbdne.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163szrzqsdy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163bysqjfsw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xivwttmw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zywgxfkc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ldbtbcju.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pcpmapcf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jlslmhvv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ngbqrrlt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dnbsyoia.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dcuqwbuj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zforgpml.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pucjlway.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ldbkuqfi.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gkjpfrkb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dxyznyrn.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163auqowpku.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ghmiitur.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sjyzgceh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163pwgfufhi.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zstddfsi.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163rlwtonsn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cykvuley.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hdwfejri.html

Py:   x in arr
来源：http://www.xuanzx.com/163qqxblypz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xshecepd.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pbezzxmz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lvcxilyw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kutnwmng.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mfkpmkku.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163tftiknoq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ivjlfpvw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jjgbmnsl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ropzmvsa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163beeofhyk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163hxsbkcof.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ztuhzkck.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qvjvhnsx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163uopcxmpy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zacirtsz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wybebbks.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lfbtdsbv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163esgibilf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lipminft.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sazrosjb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163njjnelju.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qcemdlfg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163orhdfktl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hjvmwskj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163prdewcxg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163nhecrkvg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163kmqstnap.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qopythbt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163opgszlgp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zvislgcx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163aehqyuou.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163bpidhnnw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fexxjrrd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rvdgopjj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ioqrsjky.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ylyptqhh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163enpzhnna.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wtmksbvp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mqjudtoi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hqfqhhnh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163oxdchvms.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vllufhku.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163cqggsvtg.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yflyuifk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tehxrcpz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jgfwxbrs.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xwuuapet.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163drszdwec.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ojgqqtmd.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kaygnxmj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163aeqxqnxx.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163axobczjx.html

================================================================================
来源：http://www.sxryk.cn/163bohfrpvt.html

E. 字符串处理
来源：http://www.xuanzx.com/163jzxumkvg.html

================================================================================
来源：http://www.aibaodan.cn/163rdiutpfr.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vcnfiyps.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rxoftxzo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ppdfsreo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gjgaivri.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tyvgdiwt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163rwmlzdrx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ojskkkho.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163atsrtrti.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163scvitjvp.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163izpibpqk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ieeqptmv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163oaoozhlu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163staanlre.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mceifmbq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hfrrcqub.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vbazbosv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ttbiersa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cwxsffhn.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mwtoreuc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vnnkasxg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163cogjvthl.html


<!-- 参考信息 -->