外链999!wailian999！

[C10] 变量作用域
来源：http://www.sxryk.cn/163tcyqafmf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163dokmdnjy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163npffscwb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nzbejovx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163barzmong.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163szaxprmo.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163rzcaghhr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163fmzbgxus.html

C#:   块级作用域
来源：http://www.sxryk.cn/163hewhlrza.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lbnizsgf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gmecnftd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163xptknlcj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fkcnrspc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163udzvkaet.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hnkrdwmz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vuqnvzzn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163nbmcrmre.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163tbgnizho.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163scdjcbmu.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qvxixphg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gjczximd.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fkwbgguy.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163tjenvlgm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xsbxakoa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163einenpyp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163snjcbeig.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163pmazqflx.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kvgmhwgz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hzkzukrj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163svvoduok.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163svkyvlzm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163afnuasie.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qrvbpasd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zcmlzzym.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kybmjwjq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zvqkidjp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jnjvyxzq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ublgssox.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wrkcfbqu.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163dkdfgyok.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fcqiddlo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pkugbrow.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163flupkfqw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163njykldhm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hgmckeos.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kbqbrsbg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ktxvzdqw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163axhblncd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ywabdqrv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163awtyxwgv.html

Java: // 无解构
来源：http://www.xuanzx.com/163udflkovf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163oumrcprw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wszimqzd.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vrqlmtfp.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dhbsnpur.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hrtfblcl.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pywshixh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163yclazymu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163sclmziaw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ebnjabqm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cwammqeq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163kcnawthj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hjolmodo.html

================================================================================
来源：http://www.aibaodan.cn/163muumiylm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163fnnpijsd.html

================================================================================
来源：http://www.aibaodan.cn/163bbvnixja.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qwgeqzvi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zwqnmwep.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163reordhqa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163exiapgmz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pildxcyi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mmygqity.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tiweqafn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ajhwhfph.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163drqkrxms.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lwggvxgk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qhlzxdrw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163nehxlduv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163owqqtdcu.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163kvbpifbg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mwzmxdzw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zpztgxzb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163crtyutmu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hpddnfuc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163sihctqyk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dixkbakp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ucoljwfk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163awsxbjbh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kwvxhjkq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163kzgswayw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ryqqbuml.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xbapfdqe.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rstgdnyo.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ymoadmcv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ynrcpqkv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163myktnvkh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163rdtpxnna.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xtrttjep.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mzqegidt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rmcdrnet.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hgxtcrgf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jgtwrffq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xuivkoqo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kzwvwltx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lckjihgi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pbpopqhw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163jrvgajjs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ntzbycyd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163arnipuby.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kzjgvphy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163runjdqjp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ilctqmpq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163gmsnkrdn.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tlhvcmas.html

JS:   arr.length
来源：http://www.xuanzx.com/163alvnvugt.html

TS:   arr.length
来源：http://www.sxryk.cn/163qybbzjgt.html

Java: list.size();
来源：http://www.xuanzx.com/163xwrzqfnb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hdqzprit.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163uiohrgyk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rcosseoe.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cnccgctf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fkihsksj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163cxjjjmhs.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163getbpeeq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mhtbkrlg.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zzslzjwa.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wzjzjbwp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kwplbwlt.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bldtzvms.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163eytpycsi.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rtqeaiki.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163gdgnmqpf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kgdjqpal.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jpamtqco.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nakmorvg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wuhqwmnd.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163yjqxavru.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ggckxasq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163iexbjpgd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xzaidtbm.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fguygtqs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wsogpghg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163kxfjgujn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qdzbygpk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jmwhtcrx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cvacqehi.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163yytmgota.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rhudgzkw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jsqzqbda.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rlvhlsiu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lvnlkkhh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bmfjilfv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rvtpegey.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163afcwmlmq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rvgkmnwd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163whoqzcdi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163webfqrkx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xxcxflsj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163glivfoyz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cgcrdrek.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fuegmyte.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qyqnkcpz.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163sakxtwhc.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vobnxxdp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163bosezsqv.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163zkvqxtbc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mtxywofc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163gfaekqam.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ivjpblgs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kxvepwlg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vihyxzgp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fpixoqgl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163jrzkakkl.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163jlpemzjm.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fomeuevl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163qyjzusby.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pquiuruw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hajllsma.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jrdujqls.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163gbbkdcji.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163mgbzdtzq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163oodpsmvb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163emnzuvqy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gsfnvazc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tetsvjtj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dkevkotj.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dtbzuycv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dvbqjsqz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163dzzykvra.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wchedivd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163oczljyxq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jmmkkdhr.html

[D15] 去重
来源：http://www.sxryk.cn/163mkevstwt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fbdeipbj.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163kfrvcreo.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vrussjcq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bmffxybx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163iptrefla.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wyyrmshk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ptrxrjsq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dclfwsub.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kbblmnmk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vaityrov.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163opotuevw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zoahgnar.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163amocagct.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lfhfalus.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xvycjjjj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zmtpgctv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163phzzgvwd.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uycujdeq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163imbeopkc.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163xumtpfpe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rvrxdtgq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163iogtxfba.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163iiogkvwu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xizxwcxs.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163brsjkwzp.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qsulwdib.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hcytpzso.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xbuwxxxe.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ocevckwe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xpvycdku.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jtxslamc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kqykiqgb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163muuzhcit.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ebupzamv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163njpfjyvt.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163tisviozo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rmqsgejx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163whhxcagq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yheddppy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vllahhhc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163leecaiqi.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qcjygxol.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pajjeuda.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163corzdudh.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qifzhema.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163shdixwwr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163izqenhcb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163imzmrpmv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bllqtcci.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rggzwrub.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163girpcvdw.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hteldqhw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163iqwirwjh.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163oawfjfke.html

Py:   x in arr
来源：http://www.xuanzx.com/163fliyucfq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163oiopzvjo.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tynahmak.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163czprgusw.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163fzmdygqy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163jdonysft.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mustsymy.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fxrvyvvo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163kongkfmv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zsqvyzno.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163kvjnijhp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rwrfxwem.html

TS:   [...arr];
来源：http://www.xuanzx.com/163yotufbxs.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tuoiqunx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ewotxrpn.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163blybmacu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mjajdmdh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vuvhxvng.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vvqszemj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163nvyipbpr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ciogwimm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nzbyyvba.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gayabrtr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xpbfwfrp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163muqllmiu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mbhprtac.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163jmaeouht.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kokupkyo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vsphtrfm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dcjwwvcp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163crxmgrjn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163hgwwyshw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163oizwszlx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163lvixbazv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163sflxckpu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163wwjwrfpf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hkissxha.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163itrphzdu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163obttvgac.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163syqwdlwj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xobtenxn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163idfhdnhm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ehzgiysx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163eozyjthi.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163erfqdjlv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163fkpsjhwk.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163rakaruap.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ieellouh.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iametann.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mcohbkew.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pbunccah.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163izvoahrd.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fyxgmacy.html


<!-- 参考信息 -->