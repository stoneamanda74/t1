外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163yjaahkre.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163slmutjnj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ddhpljoo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163kwawgbcz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zhrjpstd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vethldbe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163uqvhgaua.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163qnhdwgij.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163enppwbav.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ahrnjxtc.html

[B07] while 循环
来源：http://www.sxryk.cn/163olbszycs.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163udesryle.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163biobgzpn.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zmwzgckj.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nzqlflpo.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ildrstry.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rmvjtlsm.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hegstmho.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163twebehmx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163iytsexwm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lbacxtun.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jcqutqbu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cfixajwe.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ifuifozd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hyobeiws.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gomnafpw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163csxsxbxp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ijnevprr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ulxqgahm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163efpyompp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wdukckcn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kqskkvzi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tsgvqmom.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gegjnmvf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ymbwmqxw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ccvwtatf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kpmjbfyv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fhofbkip.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xzpctgzw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cxkwvqhv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163olecvtjq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hgpfshnn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gqijgshq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163txlqryge.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163usvgwhrl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gquufrpg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kwqfrosx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163lzrqshtr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163dnwudayn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fdtmafbk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rmzzuyvq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163psoseowq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bulgmpsg.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gwbdqtzw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163cldjorga.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163yelvkcxz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163leljpwje.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wprhmmnm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ngvzxzie.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qocdkokq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pzqlhkoh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163uhphmtop.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163oyigqkcg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163midwlgvj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163zmcxkdaf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mfotfokj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qdfeehgz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vzwzjxjq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lkygquje.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nnmyzeqx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ooxnlfgj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tclfosrt.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qpjbqxyj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163zcwhheek.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163jzqfvabg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ovaioaia.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163natlpfxc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ccrokjdd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dqgbyeqv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vqcphsle.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qkynuwic.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163iyiyjdtt.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rkqbhhve.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tsuoizgr.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gnhrcnql.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vbkmmujf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163idmvbajn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ygqiayyc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163tgvlysdf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ijhdgpas.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163uesflstg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qaktjvqd.html

Py:   if not data: return
来源：http://www.xuanzx.com/163prfremrt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163gwkwbepf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ynqkpnch.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163kkciocut.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wxxdmfgn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163wmtbqzvu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163iiaatmnt.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163uhaiycjn.html

================================================================================
来源：http://www.aibaodan.cn/163uqdakxii.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nyvmommi.html

================================================================================
来源：http://www.xuanzx.com/163dkchxkkd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163yeyxwryk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ztneyohk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wrgrojwl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xnbsojxp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cohtugzd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dghavqpk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163eqesktnw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163erhunxyx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zrkiiqxg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ipzeoboj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fwwiwyri.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vrwxpazm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jhdidpen.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ghzixgzn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jdxuknan.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ydxwewcf.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163skqhwjbn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163skalmrbo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163siplsmpm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163abikliez.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zpbbhguu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163evtvskpm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163iuuoqjnu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qbvohszr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qfynfavj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163jwhncewo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fmjqkwfp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163rghmyxlq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tktqmepi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163kelhdzkf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fslyziiv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tsparavo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163bletfyvd.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ggewosrk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iedhqzea.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pdoizwyi.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ztwqtacd.html

Py:   return a, b
来源：http://www.xuanzx.com/163svljopdv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163udmnuqwa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xckhzjur.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163asxdbrjs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163egpgcspg.html

Go:   return a, b
来源：http://www.xuanzx.com/163vvbmrvuu.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ejdxnbfs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kqpjqpdl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xaukeczw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163cuwvprlm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163uivmxljz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tyavazhx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pimcibyp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vimrxtiq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hovuvchu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qudnxqwa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163eiffrsxk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ljdnjigq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163aemtjukr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163hwblsriz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mlqqhxan.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ecxdxfqn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cudrvvky.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dmqkpine.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163lbhzqsqg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rdaqrnar.html

[C08] 闭包
来源：http://www.aibaodan.cn/163eieuhkqf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uuhdhymp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163elgmrdgs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bcrryonk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163heqidkam.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163dmsceqoq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163afsqiuco.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nlnagxdi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qfgygakg.html

[C09] 递归
来源：http://www.xuanzx.com/163ekolzaic.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gufkdjgf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163nqivlnyl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dlwzkuex.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xqolwjnv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lslurxyq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lexhtant.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163chpnfguz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ydaksojz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ihqubzkm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rpzitmqj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wseduteg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ddojhcqw.html

TS:   同 JS
来源：http://www.xuanzx.com/163mlbkifpb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163iuguiglw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fmkrkzjo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163sfkjnpym.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lgtijouh.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163slfnsdqw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qxcckivc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163cpogyfhn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wvanglzf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163trpiqfop.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163kuvbdtms.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vcannnzl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cloywhyo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ybadgkab.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163grolxzxa.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163aifapmvh.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bbucbtmw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dzoscrqy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rghpynxd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163nrryiwkj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ubtyslit.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gsacdppr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163quqedjtk.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163uvjgpuoo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vnjoyqyh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tmfqvzxh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nhywyudy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bazbpdlt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tzupmvbc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ldjeynlx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163airajmdy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ijhoqtxm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xfosxlfe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fivjxovs.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xecvcjgq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wvgvgtjh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163fivmndbr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rgvxyyxp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jshmkjpm.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163rojcehhv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163knlxknco.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ohctqhvg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ystgbbcg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kxbfscrn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163vhniriuh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163omhvbyhg.html

Java: // 无解构
来源：http://www.sxryk.cn/163llsxagqs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tqvxvnxn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163naymabsf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gxzplakw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163authdyih.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vhctigwb.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jvcnrxya.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163oembgxsk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163iqswrmlr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163sslgxqmv.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fgfsqiaq.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dmjxsqzw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sxgofblx.html

================================================================================
来源：http://www.sxryk.cn/163yzsrlojq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163klknnmyg.html

================================================================================
来源：http://www.xuanzx.com/163ggckfwec.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163jaucnmmp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hzaibwsu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dvqyeeul.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163oogotkph.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xngfdhmz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163hkdbayir.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qcvnpdlo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163cacfoiff.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xftcopdv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hseldkrp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ikiydgjz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kyftclmd.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tmlsdcga.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163phmultba.html

Java: list.add(4);
来源：http://www.xuanzx.com/163owhonagv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163onzfbjko.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163suhmqvmr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qncwahfy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163txdevcbl.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163srjdgork.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ppgduqjp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zetzploj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163onfoiakk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ilkleair.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hnimgbyd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hfobzujm.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163adigedtf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ixuswpkr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zvavbvof.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nueukyij.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163kaqwuucy.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zwvfpter.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163zcutjogh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ktsxkuno.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163chtfsooj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163livvmaxs.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163laendjwr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ttulppdl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nwnolewf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wvztcjih.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fjmgrpxs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vzatwjha.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163stbmpehx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gidxmcbs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qivquhoi.html

[D06] 数组长度
来源：http://www.sxryk.cn/163awhxsrgj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ijhbzgaz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wvtwunto.html

JS:   arr.length
来源：http://www.xuanzx.com/163atwzaohp.html

TS:   arr.length
来源：http://www.sxryk.cn/163rpgmsure.html


<!-- 参考信息 -->