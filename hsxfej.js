外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mtxwfzot.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163lmfknuxf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zlnftggq.html

[C09] 递归
来源：http://www.aibaodan.cn/163unhruytu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ycukedqn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163mjfpkkmj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fggyvzge.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fbwwhybc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ecasthto.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mjoccfqm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163iwvprvni.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nmstmnxl.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zrqnkrgm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tpmjrapd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gclbxnga.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hfkesnjz.html

TS:   同 JS
来源：http://www.sxryk.cn/163tqszyhni.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163smjgejta.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163enlwjkjm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163twtwkqvo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jntlqnwo.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ocxwzfdv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pawgbxjv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fnmrtewp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163lwhyrymy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rlnozvkc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163sukygwjn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163agrfwzpq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163lxdwootr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sfhrldsn.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zjqitket.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163umvxxqyo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tnvwdype.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163uwqtdkmw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vvtamiso.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163naafjake.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wjaybmyv.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vbpdwfht.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163eombuimb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ykiplepi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163vwjysqkp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lwrmrgpk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163bpcwykxb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rqifyxgn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tciexxus.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wpkmbhch.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tpkkzpuw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bwdfcuqp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jyrdtyjr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qksddqvy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163oajxydru.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163yfhioxji.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gtdmvzha.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163crrogdsn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163uwdfmbek.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163uezptdxw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163chxlampc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zpafgoex.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rgerkzuo.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163eyojurai.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kpnnsmxa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pdfayszr.html

Java: // 无解构
来源：http://www.xuanzx.com/163qgytyema.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rxztlrcl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dobifmty.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163kebqttvv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163seivdeyq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hdciilsx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163uwqodnmz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jspinrsv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ttislirq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tyeloikw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163pgwasgar.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163idgcpybr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bilyxrjd.html

================================================================================
来源：http://www.aibaodan.cn/163nhzequat.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qhezbxzw.html

================================================================================
来源：http://www.aibaodan.cn/163xowobffd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163tmxlqyag.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ugwpvsyp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xlfwifon.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mtnqjeak.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gyqhfdzh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163majsbgsg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tangkgta.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yjawczqj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163igjusqvg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rpfnqlci.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zrahlaux.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kbfqdqbn.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163txovbfii.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zcwbsbay.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zvutvxwm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163gpollzsh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163plwqgoxr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163syykamfp.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163lqclndpu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163zvwlopco.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163gczcpaiv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dxnijvbi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163osjeioqn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hmnqypsx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jnomouez.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ucaipprj.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cfsiaadr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163zwqayeka.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hceajzqm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mozwlahf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163sldkttxn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163lnqxtqie.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qucopyqf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163lapbiqtm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163hqupremb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163qttsasfh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zzrsagth.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kqpdjdgy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xtouudpb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mxwhcswi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fohtalgs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dspyaezk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163nsgaajgf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hdmlimfp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ateqixbk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163npejggqx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163uvlhpcaf.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ulzmuayg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yonwhbzu.html

TS:   arr.length
来源：http://www.xuanzx.com/163wsbybyda.html

Java: list.size();
来源：http://www.sxryk.cn/163dknwfvpj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tptqobrd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qelubeuf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mrnfzshm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163lukfvsnw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163oxbimvxw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qremwfop.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pgvkeyah.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xnxagvbv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ifrxkcxj.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163cojymmzv.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163eknufpbk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163gpwszyzk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163tjvgbznq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lacyntoi.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163lnngvruz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ixvxvpdq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163zelmrtxo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163phgssplp.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tcsgrrof.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gdxkzium.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163luclzqzq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jdswaqyg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qrlhykdd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163nrqboywm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163griwbmsd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xwzhgaug.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xesfwsdk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zdgixjrm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xyxemlzb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163yvnqqfhh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163inytwahi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wlfrppfn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kkoxzhjb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eslryfeu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163icmisufu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qsfxocrr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163iqdxjumg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163sjqweomp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dowvjivt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rfnicuko.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163beehcgga.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163sewrlyrr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163toqyqszn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163awyqcrru.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hpappfao.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163xvaktdbm.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163uwrwqapd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163couqlgfe.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163fnwqppde.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163jdtxfwlq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nszcwdpc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ublpkfqj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ggtjlkbl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163uurilpgm.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163sxmptsvn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163aetwplre.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163pxrbvliw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163oxeqdpih.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163vwddtjfy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163uecttxtu.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163verqwahu.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xqwgglio.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163dhtobwvk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ckcocsjb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163xdrikmgn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163znnnvqzh.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bkvgelxh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163rnmsgzpy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163fxyvncbd.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mpbahqnh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qccwrtrm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xbnmsfny.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wkjvfowm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nnbfpezx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163biamoits.html

[D15] 去重
来源：http://www.aibaodan.cn/163rcpghkas.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ondebaac.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pbyhakgp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163exlzxzft.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xzzoxzhh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xicsqmrq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uypihsyb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lqqpqybm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163icnnimdf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nhmusyss.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wyodufcs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163bsgzakxw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163frdpvgzt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nlhqnzzc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163cadzsire.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jwhxioas.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163iuujthrs.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163hhzatefi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163nmfzqvvb.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163htzniblz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wexhmszf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163etkkqzxb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hkngtcir.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hiylxpir.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rpblklfr.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163csajtzhz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tlsqgzqy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163epxvcrys.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163abhwfiql.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rlmebzdr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ugcvkjhf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fiqudmlr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qnaaukqc.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xsfchmxg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ryiyzbvq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qpoaxqyk.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163akcebtex.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pxxfegdn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163anblnhma.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163anmxtgjt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wusmtfvv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ruwpjwln.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jkzypzgz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163glscjmvt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pxjeiwzm.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163yoronzhx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hkafmhon.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jkenrumi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wofwhbuv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163frovsvuf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zrcjjtjy.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163plxqmqju.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qonkorxd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163oxvuooav.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163gzrepfic.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ahcpounq.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zxljxmaf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jpmoomzj.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wvvpurdc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163obnrevoc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163dsbbvazw.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163aeghvqih.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jvrogxqp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ppxfqotv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ksxtsuax.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163znjbgwdn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163txoewwlj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163phyvjzxv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163kerdluwg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163yswwbsme.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cmpmgysb.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163dxmvfkwb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nqrfbvxi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rxxduusd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163cjqnlibu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163advxoneo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ayixlnia.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gsstcybe.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dlplztih.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jcngcalt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163stbucycv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mslgjqmt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163onupzcus.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163miyzfamb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163eoxrpczu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qinccavy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bqgdfkkt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qmzuqlho.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163dmhpybgk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bysqalho.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ekjbefqd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163iwwuelyw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163jnhuaicv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cjvaimbo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163xiiueoiu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163hsguvrwl.html


<!-- 参考信息 -->