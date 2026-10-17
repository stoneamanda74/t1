外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163krxqnapz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nsgxelfk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163finmijhl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ghjfgarv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163kyckhguc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163oohgpaqz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163asfnpiqr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163eitqrtfj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163pbreiuld.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163umnenoxi.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163kdlcqkha.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zamopyll.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ynigtyeb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163mansfqvm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vttjntri.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ypdpwkqe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kurrgwzq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bsllufdq.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jakcaxgr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nbuxdfkz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163tsnwpeow.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163khldqbtu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wphnwccm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kwzucnxn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163slwmhdxh.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xilulayw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cbwvawkc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ugnfftha.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wuqjxane.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ohggkonb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fsuahxyj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163uvwwirqd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163srnaqlfz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hcnzltmh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bueixiit.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wwqhzbsb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tkgagtxw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163kgzowcso.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163alrjjjgp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hpdxuklb.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163szzviptv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pceqptla.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fsbkndav.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yivxfdkw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wyfqilvc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dcoqcqhw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163upoesmfz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163fcnywblg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163casnszkl.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rtktthsw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ynvtejia.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163klwovogd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163budlffse.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163oudteble.html

Java: // 无解构
来源：http://www.sxryk.cn/163szqqhwzs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163spovadtm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rkrpjush.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lhrifmzr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ldaualqg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163iksybilr.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163oxkbotfm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163msgadtvy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bhjzkdrn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163atdmrwzs.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163phzdpnui.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kytfligh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wqnuuhvd.html

================================================================================
来源：http://www.xuanzx.com/163dihjvstv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hdhcfmni.html

================================================================================
来源：http://www.sxryk.cn/163voydiquv.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163zowvnogk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163amyfmtrg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ubqdpeft.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pwwchyga.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163jxgawlfl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fwkyehzq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lxqjjldl.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wbehnuks.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ovpzhrlj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rrrcqvff.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tlgfkuiz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lfisghpx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kustrtca.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ckmxlxao.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qxwjvhfa.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163uinrmusd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163enohdikl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163wcrzcznt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ygvbclme.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ltxxsvub.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163kuvqcppm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163yicixyno.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ueouzgwc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mggxdvhv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bbtvhydg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kalpoiun.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lekokqrg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vmdysrjc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163rhwimhgw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hscrsjau.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xakdfjxn.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qtpwlkqf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qyvdrjph.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163yhggoxxk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163icokziwy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163iqnwvcvh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vavilbes.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pvhrzskc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bczernur.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163utjnwgxl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ckxauojw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gmlduzuv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yaftkzyb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rzpccgqf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zcgpnnpd.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ugonbbfg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163adeztowp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rbhbmsdw.html

JS:   arr.length
来源：http://www.sxryk.cn/163xgoidelk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163xcljnpby.html

Java: list.size();
来源：http://www.xuanzx.com/163aqfptkbm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163hztomxej.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kogtxaxu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wsrjrzqy.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163xjxreuhm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163epyzdnuz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hvqyevgt.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ifkqwuyq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uznroksv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163uapypysw.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qicqsjef.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163mbhnyeeg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mjnobiho.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163oqthkwac.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bpmuhsmw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163denxqvwe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163uwgswkbh.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lanafzku.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pwuwbyhw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mgmpgdvd.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bovvdsxk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qbntwijy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163lvbdodqq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163omoohatn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bxaeialf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163aycnzoye.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163dohnvszp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wbeoikbr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163swppbwxi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163obiggxdd.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xdgnnobx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163puixrwrn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fjoaukxt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163edjilvel.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vazhewxf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lubczpro.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bhhdcrnk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163tacgrhga.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163kvuiezww.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mzqxdzfr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163yfefieka.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jjxoeflw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qrghtuyg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163depbjikw.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163fvpltqci.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163aaezjrbo.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tgbrxeup.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kgkkibej.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zuiaoctk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vrosljat.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wluiqnqw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163iekrrrke.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ipovyiiu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lhidyadd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163uylqabzy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163tyenhnua.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zoyxfogy.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163kscyfzbc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gwprjkth.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163tglqqfds.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xxrceklt.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qtbjksue.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dlleydyp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wxzkjbxb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163nxtgkjat.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ybswcqfg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163mlssrsej.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163yqmriloy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xzutxipw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163soogbrwq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vkmbngnm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vsvgqffj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163puejacfp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tvhlywnm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zuzfsqfw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mbpateks.html

[D15] 去重
来源：http://www.aibaodan.cn/163ybrjdykz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163shiuacfa.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ytnxdtsh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163oxsyxrew.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ovkxbmxm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tldxuibl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163jthfypwc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lfstdrhk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qqhpqnvo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163svnsrlny.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163hfrfdgru.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163gnwfkwms.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bgyjwsog.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zfwrbqds.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ajbdzqva.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mewylyhd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wbkiwola.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kaxszfsd.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ninfkjhy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163racsnqvf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163azvdhjdb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163cdcxugzl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ohsjkesn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uycjgluk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163dzoktqnd.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163cdoelskm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zjiffhgz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mirpnamw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163cfaoqwsl.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jeckrfaq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163cwioiuiq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163syvepdat.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mtreqmxn.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163iguydjor.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mhwsikpv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ldbjsrki.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163yeomwswb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mytquelf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xwzllybb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163acdwrdru.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sdwgohha.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163jztdayfi.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163psruvrdk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jwfhbhop.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163btxbwtdb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163nbquirpl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163szdyhqpd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163huwuoiwk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uyrtqvic.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ztnhxpug.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163oaflqons.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163uzcggtjo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lmufxtgs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163frzlgbil.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nocflzkc.html

Py:   x in arr
来源：http://www.sxryk.cn/163cahwqrqa.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163uuovprbx.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bwztzroe.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163yxwpvmdv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ehpxzeqv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163bhqwtkha.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163lhwloifg.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163tponupad.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163pbgamhwb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163yvklrnef.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dhmfniqu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ncxduicf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163yltvqcjr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lusoiexj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163oehzgrbe.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163sasdazgt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163thagqiax.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ooqurais.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wdbytjyd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163sifadsxl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163amdjtdip.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iishyylu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163aczkxuza.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wogpsfpi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kdxsiozs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vnrejpqe.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ljcccemy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zlmlppzn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163vghlqksk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163azbpuajv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163iqbtujlg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jkhpfxis.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vcrfvlus.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vemapnhl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163subssffk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rhkvrsvs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163odkwqabq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163utxgnorc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kunqxepd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163eumhqzoc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163asvjhbrc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163twjpkxmx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sdcekppj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wvgmyzkp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163bjyknqjd.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163einmwsfm.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ijchsnwv.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163evmmjxgu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kzmpkbtn.html


<!-- 参考信息 -->