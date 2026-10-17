外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tqatwncb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163oaqadwxj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rsmyiymk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163pnpcieek.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163thvwnzjo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zitghhdx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163qluqfdvn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163audfkcak.html

TS:   同 JS
来源：http://www.xuanzx.com/163wilfeptl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mfbfildt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tvcwpbwe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163veafmpzt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163uksgffnm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163iezartkp.html

Py:   from module import func
来源：http://www.xuanzx.com/163kocjmdwc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gmurdgnw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rglvwcub.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lbkqvvqd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gscwvluk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163brpuexqn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163adiksqke.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163htmkvbev.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ztrmpnmq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xnqiqowd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ujlakocc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tmbhyzsp.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163iakrwfgw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163afeethts.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rfyinwfr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163eojeqpfz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wjvkliqi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jybzxllz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ppbkqyuy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kzddbfld.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163czdonpmn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vyenvgcy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163udfiqbeq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163azcwszoh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163uxvrqihq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163wzesdatm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xzzltumh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hoxgqxbp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jmsihxpu.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163rmrocjos.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pwawocvw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163igzwazmu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vxtbawel.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bvpctjdq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163zeqlraok.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rcyyrsvt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wiooiozh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163qbgwtdor.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qafpdubb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vvwakire.html

Java: // 无解构
来源：http://www.aibaodan.cn/163talihxxv.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rqciyivb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163owkzhqcw.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qhsgllvq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163lhusudii.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163yrjimwqr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pgvopofs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cwtljglk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163rzmkyfyc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hiyehicp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163stcwtgbm.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kphctczo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nnctabvn.html

================================================================================
来源：http://www.xuanzx.com/163zydbcsfr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163niseafyg.html

================================================================================
来源：http://www.xuanzx.com/163mhgzmsgt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dhyyrzrv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163buhguvgi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pyxuvqge.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163osbeieax.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163shztiqbu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nbxylkqs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163btdgqmrj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163pvdqiekd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mnrkpitd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rdybemvu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ujabdlah.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cwuhpjnr.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163aceodlsd.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163fgaifsfh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163uepenpav.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gbjbormu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ilskbuvl.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bivtzydb.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163motmllne.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ovxloabh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163eveazlob.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rzntiiza.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163gvccwzhr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fubvbiqi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163isazeyjm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ukyvmgtv.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xyuhqqwp.html

[D04] 删除元素
来源：http://www.sxryk.cn/163pozgjgdt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ylwkwqam.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zoxafswg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tpyhornm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163srgzgabx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163cuqlklux.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163lsxibbhd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ibrgpbkr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163jgnakmmx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163pnsjmbac.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kadczldw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yialwgiv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163obfwlths.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ckwvgzmj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pdehndgr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bcncpfxh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nczejdci.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163yqkenbtk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163dtihxtkc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163asagfdqu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wlyuzirl.html

JS:   arr.length
来源：http://www.aibaodan.cn/163sxucohee.html

TS:   arr.length
来源：http://www.aibaodan.cn/163lmyrggyl.html

Java: list.size();
来源：http://www.xuanzx.com/163puaesdef.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xqlyccho.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rujmhuwp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rssgxprq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163sqgockbs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163bqjdsqqm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pyvaknhz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cfnvqnld.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kdxehxpr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rsaegcxr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163vlanrdjv.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163mustzvsp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163mtxyzmmg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ifhgkxhq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qoouoxip.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163snwkpxpf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163dxockfth.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dmpzgqra.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163iwnhrdes.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qwmwrnmx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xnuoyldz.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ohgdedch.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163yrgmtsgv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pchzqcpm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163yzljvsgc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163bwcrevqa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jtbiwckh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qcffwbgz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mxlxudsj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wrknosdl.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xupxzinl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nzjxqqvl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ssykbysj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mqvkvmns.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sxesaglp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lterftgq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zqqotech.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ecamjelk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fsaguyxd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163maacbewz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bsnyzpuq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ygquutmj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163shrldaje.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ovtkcxns.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163knkuusly.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163zdzjuggg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vkljhcxp.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163amooyxab.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163keoxvjzq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rpzuxcwi.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163edbzenje.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jdzndnqn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163apuithyy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cbobkndd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ctostiga.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wlempfkg.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163dwdiwlid.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dxkprhlc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163dqdvbwhb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qtedtgsx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ggdfplxb.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kbkikwam.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ythpgrtu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xbqqpggw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ljaqpoce.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163yiafncjs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163kbkxdeec.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xyzgptns.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rmdbacgz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jesrkvav.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wxtbznxw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ywxbnwid.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163bdqiqgzm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fxweyeem.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163psybihia.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gtilvwex.html

[D15] 去重
来源：http://www.sxryk.cn/163pnwnmrbr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jfqtihxx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qqqqxwna.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xtdftnzf.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vamfehih.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hegqeneg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163nuxnbcgr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ivuureum.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tyjymfrn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zmsfqwny.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163iadjcxvp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163llochjah.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gvnmalil.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163eidiwybg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gutuubkq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bjoqevoj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163oqigfmjn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ghvssfnl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rmjpeffn.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ubycvcma.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ofwncfvg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163krgxlvtj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163xvczcbae.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163acfwpahz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rfsyccaj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wqwaaytl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xwfyzerh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fqzxetvo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163mktxydfo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163gfbuamvw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bpvmeliv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163mhpjeewg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mzphpcwo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163amiwuoxw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lrrucndu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vyliwkmf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163mtfdzigt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ydjirqnw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wbsjbwcz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tqqdxjyt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ycahhunw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hsnppbfm.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ohjxdciz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qvvevggg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pmhynaeu.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cfcaovjk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ibjujajj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cxofaswd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fhzrynzf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fynjflre.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tmesnpqs.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vgolomnb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jncktzou.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ofzkfjgu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163jqambnin.html

Py:   x in arr
来源：http://www.sxryk.cn/163wrlmwmag.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163uieugqhe.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163azjnzemy.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jmppmlhm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163xgrdupmu.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cnihsmxj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163zngiveud.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qjjabsfw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163idqsnyyi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163wkpzbdza.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rbnanicx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163khjplwlh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163yackatye.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163yjfvsyzg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zrgimsxb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jehyymdd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163atzlncyj.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ufitafsc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163armlndgt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xvzcdzvv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163snlwxigd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kqliqgcc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163smxvykmo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gwnmnprb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wvluorhv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qybnmuph.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kyhuywxl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163clnrdxlh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rimcxild.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163fvhvqxfh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163cicifbrv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cunnxuyv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ugrfzzoi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vzmhhmhj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xjnpjwnj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163uexpwppj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163zxfgtotm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163vgvzlhqn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163sqgeaofd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mbkjnsak.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163txjrqhyt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gftqdubv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163psgscdpz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163aiayqvhy.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uamnbcxm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163eowljowy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163dyfpoetv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jwnycayj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ekrcmhva.html


<!-- 参考信息 -->