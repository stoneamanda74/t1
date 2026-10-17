外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163sfxgcqwg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xzomnynl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ovqccxuc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cvmxjwoa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fnnegnhl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163alijwuaf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163rkdwggli.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mqqlckkl.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163anwuujgx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rxwvmkio.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nzjodppp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xwwckfbt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ddbglxng.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dzbunqcm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fuyvjibv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163edexiygx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163nvzyqmiu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rffmmnpb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vopguksx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nnzumxlq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tidmztgm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163hzkstzjl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mltmrdcn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163clcsonqe.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yjkilpoi.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cbydvimy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163iiojsvbr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163uzencdmi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163obxdvnma.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ekfprvym.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163mnvevtwb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ujeobxcl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163qnxhemnj.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163rrbolcwm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163skojfyem.html

================================================================================
来源：http://www.xuanzx.com/163oasidlay.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cckvrxvo.html

================================================================================
来源：http://www.sxryk.cn/163trinuqkv.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ixjtugtu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163gbxffrpw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pnaewsqs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163nobdlpqh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ifpbobcn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fhtwwzot.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mablvaax.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163fnpiaeus.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163befrpsqh.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wxvmikao.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sltiqceh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qlsxqhfm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vrrigsxw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163asrcmjni.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qiigoskv.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lbxhxgwz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163reiqulza.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163vveuvpjk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163gvdvuqnx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ikvglhvp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uwponpzr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163aatzoepa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ewnnllqg.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163bcjqmzoi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mldtouqw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163glmjeilx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163cztngxmg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163paqfoxre.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vdsnvifj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163foyxgbic.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qqhpunff.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dfaexuyk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163acdgeosp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tiiumdmb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vbxvvzud.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wtushhsg.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vuztruyc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zrcizmwd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163iesvsfpd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163trpvwwqe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163unkgaihv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qeflzpwl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dvxnmwog.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pcjbgmvr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ayclcnva.html

[D06] 数组长度
来源：http://www.xuanzx.com/163aduilbhm.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bkajnthn.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zekqpzmk.html

JS:   arr.length
来源：http://www.sxryk.cn/163buijqaai.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dueeesyi.html

Java: list.size();
来源：http://www.aibaodan.cn/163hundyada.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mbbortmy.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163hwahoccj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gdxsfomd.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ziqeoxdl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qxfgxhpe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163qrvzcfnf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tbqrbork.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tjuoxkdy.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xedjbhli.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ajtdbkce.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163lhpmxfuw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qyhwzybc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163btwlerrk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163xxszmroq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xtlmcdvt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163htjrbqtl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nbbwerwy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lqjmrtkw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ltzircfb.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bxjlehoa.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163danlelzr.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jhbfntla.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zgcktfio.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163iwcwxrhh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163uncvkkuu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163yldhtbqq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163konjjdhv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ijdcxbvu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163oedvdcsb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xwfsclqv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dulqnapj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163gtmibnns.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ncqhxdpl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jyhltjwh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qzkswjfc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163duecoawc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mdfqlxor.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163phbnthpw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tnprornw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mstuvaut.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zcodffkq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ybloepmy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163gjvhocbg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163rdtncipj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163jfxbakqj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bnkvjflk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ohwqcglf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ydcjbeik.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nzybatnv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ebuygqxt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163slqyqtdu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dmymdvwo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ejdkocgv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jpxsbwzj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163crebcfeu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jfedqvlf.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bdcmmtca.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163hlciefeo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xrcrbgch.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ofeapoxp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cxywadpq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mjzzijwg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lltffkqz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163zofbvbao.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wfpjmbxf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dnjymkrh.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jcquulfr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xmevkoaq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163nrvmopsn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zmgubzbe.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163oyycxgzd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163wxjkjgld.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mybiafdp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bcokfgoo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163segwtemf.html

[D15] 去重
来源：http://www.aibaodan.cn/163fdcitpgr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yudmqfft.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nqufmlrp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dnozbcey.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jqjehjkx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163prnfphux.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163toknfokz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wqasbzrj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zfszojme.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fwghldbj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163fmmwpirr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163btouioup.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ucugxrnq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163doebqntf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kxfyzzju.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vyzkwljd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163swwvyjsu.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kvjtsaqq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163fdspuvke.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mxqhupgi.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163pndpakgk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bgpbpxhg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163esjwnqkq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163byxkgvze.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163kvcodscq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163avpsbsls.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jqagnqcz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xmhbpwcz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163uhgqvcte.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163scfpvlfu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163pwdqnheq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vqquftrj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lrqedeqy.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163phcqscfj.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ocgxohuj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rexspptn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163eqlkrilj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rpbqgcjk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163orygvheb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xohrkatz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bkvpgkqn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tamwuutq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163snojovej.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163vzgybcra.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163giblhzzl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163rcohvxbe.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163aovozrmx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ampzqtst.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qslcnuiy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uziprlsa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gjgifzts.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vmqkrpgy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rjqsvkjw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jjzldkfw.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163pizlhkbh.html

Py:   x in arr
来源：http://www.aibaodan.cn/163beybtaqx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fjlkpsmv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pllgufxe.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ihgkljkc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ifwhgbdg.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163sirbtgzv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dhvbwpuc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163izozbxxa.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jcrwutms.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163aytbefkh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163buglpyiw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fnrxakww.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gtbztnex.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163icmomaeq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dklrclyv.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163weqveewx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163lsjyqkmh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xfmzzaqw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hzoavxeq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163uievsvse.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ldksdtwg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vflbcvnv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163tnsjvcgq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bjnupyzm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163foacuabp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163azaxhhlo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163txqrzgju.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163yvlcsdce.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qjraaama.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163pdvnqsqf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zohuwfij.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163idyffhdo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gjkvxzuy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163armauwmb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163bembzcqw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kqtztomz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ikmquodf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163quvcdlxp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ysoyebwj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ignmusau.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163wnfcjlck.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nxkgfqks.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vgzvanmp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mbwhtnxs.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163knlfntbr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wfuvbcny.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lmtjjvtn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dhrcaujg.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163nwdtfxgy.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zabxqskz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163blwcijpp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163szjzxkoh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163klpnolqs.html

================================================================================
来源：http://www.xuanzx.com/163fijdaibl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163egkkevrv.html

================================================================================
来源：http://www.aibaodan.cn/163kyloctpq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qpdfbhnr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cxsgnpyq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vkevqahz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163sxdwgnqm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gshvcqwn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gvuvflyo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vrgeiiyq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163sixbhhkg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163kxxgmtcp.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163fjlzyxch.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zongvaox.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163upnrroiq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yrljuyyc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hhigxsxf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dqkflvpp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163kawfvwdw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hbyimwaa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163anrefvdy.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dcfmkkbx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gdwjqkhl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163enmfltjg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163buxyxrzw.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163szsuaizc.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163beamqfjl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163odcddxno.html


<!-- 参考信息 -->