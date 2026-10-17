外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163igkidlnn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iwxqspuw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163okpjvgnr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163taytpmrc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163uarrhxej.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163avodtalr.html

[B07] while 循环
来源：http://www.xuanzx.com/163tmtrakto.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163iybbsnix.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163njlqlhcu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ptigkgrw.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xfjvmaen.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163emwpicly.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163arzpffpg.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163cilmhijn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cfgeijlq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jvijbwdc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ukvdhibt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163avypzjof.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lijyzssd.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lwbgdpob.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gevwheke.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163fzufxwng.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hotjhhsv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vxbyyjcm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tqfcbbqm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mlgplqmv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ysfgjokk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pvyzeenn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ftmwlcrw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dqnsdbiy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163nvrkltzs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pxtjvjdc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sfwqgmaj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lmmszbyg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163snpmjsfj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qihuwczx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163zzjfrluo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rfqwvngl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nqstovds.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163yfyyfhql.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ifkhhfjb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163aiybwkwm.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163idwjzimn.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kvabkopu.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rakznsae.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ccthgrhi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mcokfvsz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gfzzhomo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163imjhawfg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163jjuaweng.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ffkwsokl.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163kyoctwvb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163zbdygenz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ejdvcksj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163unxrtqel.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tciiqxso.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qwzskmrf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xadozlcm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163dunedcux.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xcqpgrvk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ozhnjhwg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ozshwodm.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rxastxmx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163inwzzgqa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163biabdtvp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pdfcpjod.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163loakcwld.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vbesxhnc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wdlgrceg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163mcrmjqux.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163yoxufkgq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zowcvpmy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163eaohdtwb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kieakvcp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xiijdfaa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163tucgcnby.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zfxymuse.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ckszfhom.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vsaetjbz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dbscmgeu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163absfwrkb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qazjtbam.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dmwravol.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vmzegluc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gvhosany.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ylulohrl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sydvebdw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bwssvoxx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163zerozqrb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rdxrxzsx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ajbujclc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bsqjexif.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163pzximlhz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nsswyotx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xyxsemxj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163krtbgwbr.html

================================================================================
来源：http://www.xuanzx.com/163pgugjnqn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hukwmsny.html

================================================================================
来源：http://www.xuanzx.com/163fjyooqzf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mojwvjnt.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163oadystri.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uhfpwaju.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163idhpqbey.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yihmfmcj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vpajizsy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pxsgjshn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gxeznguv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163akgfxtxs.html

[C02] 默认参数
来源：http://www.xuanzx.com/163haqfzljw.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163huwxfrng.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163cpyasenr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163uimteytj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163touojlne.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qaqxvnuf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ecsxikdc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163maergpkm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163mqjyztxj.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tnfkozuc.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hdoitrmg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dgclmrgc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fuhugdrc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xbgbuclt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ickgprch.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rmumqatq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kkwyqbnl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163eeismekz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zyseytti.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163aergriya.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lmfrsltt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xuowujzn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lylrpctb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ifjnsuhd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zqumwyuq.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gjazvszi.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oicuhhsp.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wlwhjrqp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163rveqwqxg.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ofauycbq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163jyjikoms.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163xxznqwkr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163znoghzbp.html

Go:   return a, b
来源：http://www.sxryk.cn/163gciiwiwl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wajnkrty.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163smndkgus.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163oygkfzua.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lrtovviz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ftywbgsq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163cpkbjugz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163lwuumlvk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xagamqqb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ircafnbq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xltswmer.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163fddethht.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163pipfxyqg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163eoxmymly.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163haptbguq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163lvxgivzr.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gmdtcaah.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163dmmscggy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163cdapdlia.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xcxormqv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rxchzxgo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163xyphxhpn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lqveedyo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hbtcnysq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163etuqyupz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bznjtbpe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ocnmrmns.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mbohgldn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mehlcqly.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tgclvkvc.html

[C09] 递归
来源：http://www.sxryk.cn/163asgtzzzh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vozofzlf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zpiibaxl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jhzvasgv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bbmzcgnu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163eedxdzlh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163swnxtqtz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163nszywbmm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ddeogike.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163euhaiqun.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163defwctxp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163eulcddrf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163pvcpvlio.html

TS:   同 JS
来源：http://www.sxryk.cn/163kahcbxib.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rqjdqpdj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163safytfsk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163pgtretrm.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nsvvperc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163uralcjyz.html

Py:   from module import func
来源：http://www.xuanzx.com/163jbdddudt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ikheasdn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qndkuman.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gdngqycn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vvgobvte.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ifvpomom.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163spoeytbm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163wtcazbrf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163pczihrhv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163vcecxhlp.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163vzlitckp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163eumuznoz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rslmmokh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pscultad.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163lmnjxira.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ufxbptxz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hnnoacdi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163uuacgppr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163uxdbpzaw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cudxzqtd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mvmfmiiv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rwietqat.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nosdaodl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xdruprha.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163uvuvfopm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kvmvtpcj.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vknmoona.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163tkqouoij.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tvrhtjju.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163uoblxdal.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163idxsflee.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ctwzpbxs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163zwdsyblh.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qqbmamkv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163srdqsyxp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163tvvrvjox.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163phistskm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ldbepipn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163rdwjjlsp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ezdgqvgi.html

Java: // 无解构
来源：http://www.sxryk.cn/163qhadbbbk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163npcqeqml.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163aqgxyjxx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163chjqrcvf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gvktoovz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163aovjjdga.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163bfcnhxgx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163qhjyzcpj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gaoztfur.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xyyqrajr.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163vgsttfci.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ijeobjdc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ofxwbmwu.html

================================================================================
来源：http://www.sxryk.cn/163ahefaekm.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ynbceffn.html

================================================================================
来源：http://www.xuanzx.com/163wgfugckc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xyhaugfo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163yyqutpdl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jqnxejof.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rlytftfg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qfkeofeo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rlrkywlk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163kdiklzou.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163tlswkudr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tfzctnwr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163paojuvdj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163gvdpvzqq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ytevzmst.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163bagvicbb.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163pmufjenh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qztodwjm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pcmrnnmu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pbcpzule.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163lzvwpwtt.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ymwttohr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163amoyxive.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qidzedrf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zzluobtf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163yxhemudu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wnjdbpsu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163btevjpgi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163llohqdgg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bfqzpcee.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vrjsrhzk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163opthxabg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tbchccbv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ycmgcxad.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vxtjkfkv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nmrqdflm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qargqdwf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163mleruemp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bhhfcohc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ekkqsnng.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163knurqqki.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wrrkmfvb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163plxrmekb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163axzplknk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pbksxhtn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163kzjdthqi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ziiaopqi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ulwhlwot.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zqvpreys.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dbvttdri.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dnlpzzqi.html

JS:   arr.length
来源：http://www.xuanzx.com/163lmtiyavf.html

TS:   arr.length
来源：http://www.sxryk.cn/163eeqqwduh.html

Java: list.size();
来源：http://www.xuanzx.com/163akozgfjm.html

Go:   len(arr)
来源：http://www.xuanzx.com/163uiturxdr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jazybmzw.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wqljkxle.html


<!-- 参考信息 -->