外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163yvovtzbv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163imloawne.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zmvkddhq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qxrltydg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wabacwbq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163yggyhbps.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tktulxma.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ctdaflrh.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163aorhuchi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pdpxgrhm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jlijnsjr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wcrbptzt.html

TS:   同 JS
来源：http://www.xuanzx.com/163jqhdbgim.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163whlwsmhj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fgmcnwlb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bomxxjex.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163stgbemve.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163tnivkrcc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163eeldlhei.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vpffecxw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163evrzjrqc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wohtajha.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163quvtgufq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cyhiifdf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163wuixiezt.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vynoaegn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163nwrdqwrt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163toienufj.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163pntctpju.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hestugfg.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cjblqzed.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163tkttbkmp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xukkgvzt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jlcxezra.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vcaacaaj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163wdoijymt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163jocxkphk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uilhddeu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163fxzmkpsr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nzsksdet.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163esvhxtss.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xjzttvgx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hwgqbmyr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dyetecpt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163aiikiflm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ezoygoub.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rstmauna.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163bosmabjf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163scqtnnly.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163lkogqrvf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jauuxpvm.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vadsanzz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163zwipyqhv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163edstruwp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bpikburh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ejdnwaqr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cthwcxwv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nbrtvqig.html

Java: // 无解构
来源：http://www.aibaodan.cn/163eobrqjve.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mclegsqm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163anmyavek.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163acgwlyhl.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163heigzxim.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fyfhcyad.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ajeonxkx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163fgrsgnlq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163suerlhre.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163tylmyxdc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rhtfdsac.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163juswtvtz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163pfoyxuhg.html

================================================================================
来源：http://www.sxryk.cn/163wifqhhbz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163bqmggflp.html

================================================================================
来源：http://www.sxryk.cn/163xpywqffu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kkgmcwhz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163insriwqd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163crimvkbd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yqozcbxh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163updozvft.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ymmaacds.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ekyufqrl.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zjahhybh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163adbtdvpr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163irdqlsgf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163drjrcmfy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gaiqtkep.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hexydxpv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qyttjpcq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lcvnlodq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jbucnpsd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ysznzbzz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kfmjvyko.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ggsnesas.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dvtmesaz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ojzaoxsc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zmempqxc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163xvbimigv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bdffhrqa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wktlleoz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wfcgzshw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163zhqmvwvy.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ojasrenz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gacusxjr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lgxzfufn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dnrcydlb.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ywfqmaqr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jenvvhlf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jflyuloq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zfvttjdx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pirniysd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163butivjje.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fikoakjy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kkgrogpc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mlgppiqq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163gmkhjjde.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dnaqnlsi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ehlyjemn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ihulyvmj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163yptmibdn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163uxerfusn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ccuodyun.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163hwvwuqey.html

JS:   arr.length
来源：http://www.xuanzx.com/163cmbhphsp.html

TS:   arr.length
来源：http://www.xuanzx.com/163pvlbsjvw.html

Java: list.size();
来源：http://www.sxryk.cn/163mtqbqypq.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qrjbhtcy.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163uofratpd.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mqlcleby.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bizfwfsd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163epknuhal.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ejskkeeh.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163obphkaba.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fvkmemyz.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163tjxewera.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163yjawujdb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fdjnsflq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163sdzvurqm.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163yglfkdox.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163boyciybb.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gczfjanv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zqpolfgm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xsbcvdda.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163wbrbixdm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vtgldiem.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163yagqcurk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jcicsaai.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fzemtqch.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163luudfowz.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163pawhftae.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wbvfyzxc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rvmrzrwj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qkktapcp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wgxywlgt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wgowocye.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163reecoktj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fcfvbxma.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yzfglsfj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163buhioqsj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163phkfgoar.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iamxnwyf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163nauyoipx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163txahzrnu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163phobbdgr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qjojbvyw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163shwgmtur.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ndirbthc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163sjmfkbiv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163xgjyybcu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kxtnlwjy.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vujdumvx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zfedileb.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tzwtxrqu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qfxuuqrb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ugamhkyp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rupytrsx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163cekhtivh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rdolkszc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yfnasgtw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ipqsmmxg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163aljgebcb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163kvkaklmc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163anxsdmbh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163xufbtgmo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163tadekeun.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163pxymgjeq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ufyfmgwc.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cvtxjyoz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tbocpuxm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163igzcwcwn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163guelbomc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163wolamzop.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vdfvjphs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jftehrcx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163uxzrzxmt.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jbdcbfdz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cworpevh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163utauktut.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tekljuja.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mixojphj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163adaygvuy.html

[D15] 去重
来源：http://www.xuanzx.com/163zmyldodz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ntadbaww.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163edjucxpy.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vhdtwciq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uygsejbf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ouigwplx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qjuqvrhh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nmytbhrm.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163lvndbqwt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163eohtquch.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xnnzulij.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163oqzlejlh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163kukwsvxd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ulopqsby.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zmslzqcn.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163emxekorz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163twyjlrwp.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163tnjdoqio.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xdquytww.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163xlgqnccb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zhjdokdo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pzvkaxtl.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163bdcjhtjc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jftppzfk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163deoxwzsw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163enfwpvrh.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163opjowsjo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163uzlxunqp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jagbqiou.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163sayulxji.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163szyriiui.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rikymqcv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163uirzdeto.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163lhadpnlx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vghzpnby.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wkvwdbwq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jwpdtzft.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rnumrvpo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163aarfdpjo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163eepimceo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fbodpytn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nllfifnk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pphmlxpa.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hbruhkgi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163priipkky.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163amrcdxvi.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rnfkxivx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163bgdzuseo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aukfmimx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fhfnetcz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163twbciqlp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163syqaymzk.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hkjjzkaq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163pwwqmyaj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163sfrvtqxi.html

Py:   x in arr
来源：http://www.sxryk.cn/163rqrlejma.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163cmvuaftl.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nyydhoag.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163inpkmvqp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163doqvkssz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ftzldhzt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163axjsnfpb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qwjcwauz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tsfokwsl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ufitelec.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gvprmbuj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163fojidkur.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xooexgok.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163vuyoumus.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zzxkhaia.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gjivyzhk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vprhwfqk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163tqheyorg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vokwyyak.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163eqfxlkgs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ehqbehpt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163oxooaaul.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163tuifldjp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qxgykxra.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163kiyitask.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163nqwevepl.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ocpxavle.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163avmqgrkf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163aootrxaz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163getxhjqm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gyrplccw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163fvusofyi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163gopyeped.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jjqwhqip.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163asycwohm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vzxvojkk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gatqvdon.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163omeboevc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163uohjzspl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163lqecjhyc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163nyozimei.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nwuicmcp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163quzvqcun.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qratutvn.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163skybanjh.html


<!-- 参考信息 -->