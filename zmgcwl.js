外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163bodkaaje.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163twxwinou.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ulthftej.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163kiealnxa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163rhuzgiku.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sktfhltp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bbcyevif.html

[C09] 递归
来源：http://www.xuanzx.com/163qwfozzcn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cuowwupb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163adothdvr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qilxaipi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ouhppqyq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163qjatvwro.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163fdcwcrzu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qshdrian.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qsyixrsg.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163axcfnmsr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163oepoieqg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163nmkqsqjf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163zymveqpr.html

TS:   同 JS
来源：http://www.xuanzx.com/163dzudczej.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163lrjirxbr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163llpiybhm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ijixiqug.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xfffihzt.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163nemnulrr.html

Py:   from module import func
来源：http://www.xuanzx.com/163bkmsejth.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163lzaymwww.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qaqbvelr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xpsfryrs.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vzvasnsd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163cdwdfxyd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qgfitfcu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163yiepjzvi.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163bqlvyuxt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kotvbmuu.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163jtwxtrsd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163whatcyrv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gmrgshnc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qmfssvqv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ljyraptc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dfjypqpw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163iyxkxtfd.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rvvertgw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xunnjfow.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ahfoosjg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qlbczkhg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lrqgojns.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163psabqzed.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zwvnbmof.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ekjffoqs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mqbtjkkn.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163wwooaxeb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pcyrhajv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163johwmtnz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163hbimkdmc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ajqesjph.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163iarsiqdk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gruresux.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zhsftvbe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163tyfxrbfz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163bgbuxdum.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163mqmyojnw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jgbxdzam.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zoiltsid.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gtasryxn.html

Java: // 无解构
来源：http://www.xuanzx.com/163sbahqeqm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wkhgshxp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163toczdtgd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zqsguqvg.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ohxbsnpj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163uqzarkgw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163fqouqtsm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163alsmlwpj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163pzctsvuk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163jupaqqtz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163yumhxvfg.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zexlmvqv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163redkdfnt.html

================================================================================
来源：http://www.xuanzx.com/163hggwocil.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163gtdwaxei.html

================================================================================
来源：http://www.sxryk.cn/163gjglxcau.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163leofotyw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qevqilyy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163imbsbugc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mfbwsoxs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163rrffmfne.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fmphdvmp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163odwbfwto.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ovanllsi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163znnsfobj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pqpgmrbp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163noqjrpom.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163tzhurzlt.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qcsnzxns.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bxafqmmy.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xojppxqb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163boeebccu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ozpvjjzw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163sqzklqqe.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kbjecygw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163blhuzkoi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xruhkiml.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163kuzkbubk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vmqitcwk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jnrvijsj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fxaepckx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nfpuxday.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xzsmbhod.html

[D04] 删除元素
来源：http://www.sxryk.cn/163glrzjhur.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163baaelcww.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163bzynjiez.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163iclyzzma.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163cpuxnlzx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nrtikqqo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163aupkpkir.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cawgvwsd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hvxnyfhd.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ajcwrsnm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vvqqjlni.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mbqjjtzn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kkfachkb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xopeerfn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163tmducxjx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dczvzkzj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zuqlfznp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163iojzcceb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zaigzmlz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163prbbzowu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qjybtspy.html

JS:   arr.length
来源：http://www.sxryk.cn/163bgbzwamh.html

TS:   arr.length
来源：http://www.xuanzx.com/163qvrargwm.html

Java: list.size();
来源：http://www.aibaodan.cn/163jkgmyytm.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163wpzyvefi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vshhrkil.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163szacgivf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wqxfzfws.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163lrqarlev.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mcencniv.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163islrqufi.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gqowyzjc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zaqbujwm.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163eossvqdp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tpfkcrog.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fmwdzgwy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vinoccgm.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163srafaplg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163letwsqcy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163uonwuvhy.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163wlulriss.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jfyiitnn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163huotirre.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163cqvcpkzk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kquuvfka.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163itgacxrs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163giokkgkw.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163sxlourue.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cvwcvefw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163yjovkmtj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mzxhvthm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ugxrdjrj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jlwafhij.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163tdtbddsn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kvoxbjgn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rwmjlwjx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xdkpweru.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xqolbkud.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tgedsomu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zoisigea.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163aykypvai.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ojnpgfns.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qbhjcfhh.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163izxsmghm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hnzzyklp.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163suiewbxp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163etptkycg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kozjiccm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163nlqhlmdl.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fwsbbdxa.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163cxdlsjfu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hnrcufbm.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hpxhbqme.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yresmxba.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bxwswxls.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gxrnznkk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ecqabtxa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wojfdlqb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163niasrxwh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rkmixgic.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163gssuifsh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163kbawomce.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163drpyokfz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kiarmytz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mqcladoy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163imbzsvka.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163djizgnst.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xvlcrbea.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wbqbzroo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163unmlnhpm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sblkxfhn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kqvnndyd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163laxmznnq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dukltkcb.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yihkscqi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163brnbtwho.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lcmemyno.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163fbjdxufw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dhanhrvb.html

[D15] 去重
来源：http://www.xuanzx.com/163lcxroxzo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ixcbjzts.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dtwmybzw.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dfciblzt.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163evsmpggg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163uyezdjcc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163bkwruwgc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163affvmdrk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mezrilds.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163tbnzezjw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163halfkojo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ngpdiggk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dhjbvomp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163urmqhstf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hojvkwpd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ponobaim.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fpvooipo.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kuscojoi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163bogfjivx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lxqxdqab.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dilfuqsy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163djlvvbdb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zthrunzg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cjccwjfq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rnzzzhnn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wrvdgisu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163dyboomqv.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hawzgcyh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qxktdqmj.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163mfkubplz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163koipzhtt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163sraoretw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163abkmrrts.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xmfgvgrt.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nneziiws.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163kbvyeovb.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xqlpmonv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lhmtjsiy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163psvdqaos.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163axhmtpwt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gxmfwequ.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163fyvqhbye.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163skiwajfn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kttlvyqg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163fuhzwbhs.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gdgtutim.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kgjydyoa.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163waawqqgr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163llkvzdck.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uywbyucs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163bxdpptyb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163iulbunvb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ylnaillw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163widzqlhb.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qaeimbxm.html

Py:   x in arr
来源：http://www.sxryk.cn/163umvpmkrd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mvpuerqu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163oetlxnak.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wpotymbf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bzjmgoek.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mzqsphge.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fcpdzifd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pzpjfrzw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mroburap.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nzpqeace.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163dmurdusq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jmxzmnhq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163oubjmtfy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163zpkizyye.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163qllgwxla.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dswiveeu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vvbdvthz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163dsvypyqs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nftwzliw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cnixkqya.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jshuiwwc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sthsklvp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163essbiscz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ttejseju.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fumwwyhm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163lphkxjwu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vcvlnaeb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163aogxmdil.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qnhhuzdl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kgoeorme.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pqxqompe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hwludbrh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fnruegxb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163teztsxgn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xixsibxj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kygogmls.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rowmrvhm.html


<!-- 参考信息 -->