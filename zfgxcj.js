外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pcyliofl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wycasmdx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163veaxsksn.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hmqoydol.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163tpfyhlkf.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163pnpemlyg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ktbtkjxk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163gyleuumm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rlultstz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163iissjmwt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163feqghpif.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163qqgolzlj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vyxnvkyz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wuskvadv.html

[B07] while 循环
来源：http://www.xuanzx.com/163puboyabc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163knrcyipo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163yyzjzpxg.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163njhqvxma.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fckyvxdj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cittpeon.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163bgnqmzxr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163pfqudzvt.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nwxxkqol.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163nkfgtblz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163lrdwtmsn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lgqzduoo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ajaqzzvf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ezzedhzd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mrbzilmq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163fyvzyzla.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163anrnbrez.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163trwpfadx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kfkwgdgs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163fwhlkmuw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163itlfmygt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nlsaemmo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mzhwxfpw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gpcnddiu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163leigztgq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163iasswjca.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rmirgrvz.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163inooptws.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jiyqgdzf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163seiaqoxe.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fgmauocq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rlsaiwny.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dlnfhcnx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163lnrgyprb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lxmpcytf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bspogpbf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ogzbajmu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dwkzbbfl.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163iyiaollh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zemklrcz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nykemnyd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zbuugnss.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lmosdwfd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rvftqlvw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163dxuzgwwb.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jgcyoygh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163txcecbzd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163aemajive.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fydbjkrf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wwbjxzbk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zosnfbbg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163sdpungtq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163chajubnt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bpgkvbeo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bewzuljw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163djqyrjod.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163injpiivo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163krpqceby.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ogwbrwmo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tnufeurz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163byvnpgww.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wpzlbvze.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163meejmdfq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vzpkswjt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kxpngitd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dzzkfybf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ffevourb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ibmiyyho.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163otezopan.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wtzcebcy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ambrdicb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163apfrmanr.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163aafykrzo.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163divfjwts.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163yeldqngh.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nnrnnzgk.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xkoacleh.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rmfbawaq.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zwjkpcqc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163xvjtsnhc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jfsauzpi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163tqxyuzku.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vkjrzspm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lqrwgrcb.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kdylklui.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163lbxacuia.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gioxhcmh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ugjarpfj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ibtbvtmy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yonldhuv.html

================================================================================
来源：http://www.aibaodan.cn/163fqqosogq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ggxiyppb.html

================================================================================
来源：http://www.aibaodan.cn/163urdihufz.html

[C01] 定义函数
来源：http://www.xuanzx.com/163luffimme.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lawxnpws.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wyufnunk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kbblejbg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vqzedoca.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uchxdybi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163puwtrcjw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qlnvsxgx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cwlzgkqx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163epgcjdfx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pgvlfnqe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yitoievi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163thuwkxot.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163apwtpqht.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hszrqtxl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qmdncxwv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163juhddozb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zsvkokae.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bcqvjonh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jbkegvrb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163huhifecf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163uhytyuhu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xrqhpkkt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bgdpmixc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ruxfneoy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163moyyiubw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ipgqkiwg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163pvztfqfr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163uymfeqcp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rgybxdpc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163plwajmpv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bxstxcjt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kooeshgs.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ruajnwyq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cnwhhihi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jovoztkw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wmvekjcz.html

Py:   return a, b
来源：http://www.sxryk.cn/163xltsrnyx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kxkmokch.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ctzunxhn.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163gwhypfhd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rixbmdfp.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ybxrxqah.html

Ruby: return a, b
来源：http://www.sxryk.cn/163rvrjgzhl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ordqsllz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163tcfnmodx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163nxfqaagr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fxflnzqq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163acqhopwg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tjyzabdc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ayjvaptw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hljghdjb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163eisrjyys.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163uopeivqj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dqmxqukd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vwhflxmq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163olcmbfiu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163klkaqpnd.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163tqmaqbky.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ruirhbpt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vzoppvhq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kuhzdqel.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163eecoluns.html

[C08] 闭包
来源：http://www.xuanzx.com/163jtmfadyl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hxtwexav.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wdqupgcj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pzxgmdfd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bnryhdff.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xjtupzxf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xzjzkhub.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163aggwxsow.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jywyttun.html

[C09] 递归
来源：http://www.xuanzx.com/163hsmfxzmq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zbprjwes.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163quqnhpvr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uzpmcyef.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fqrmncng.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163saxkhkrr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dbxwvaoc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ozoizjdc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163oskerglh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jzvpytxx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ejboemzp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163iepkwmfq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hqplulpz.html

TS:   同 JS
来源：http://www.xuanzx.com/163hpsujuxg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jvlnfzjx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ujtvkhxo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vzfkvrke.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ipdqjarh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wzlqnluj.html

Py:   from module import func
来源：http://www.sxryk.cn/163uizyrtko.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163kxvvvjhh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tfdsawyb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pautkofi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zobugeof.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gspcpgzz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dtjcasov.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ubyxuogx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163cqkznjcr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163pzuhxqol.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163njnczflr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163femivkru.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iwxuuaso.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fyvikuqo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yqchvbdo.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xccqwbbh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vyjkazei.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vwztonjv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163atfbybxc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uzjweawc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163fvrdfitv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fnmkzvvx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hpyqysqn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wokrmchu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ybvtxuzw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rbevdmfq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163twaetdng.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gpzlwkeg.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163upmmzgly.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ewoevebu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pbqragzu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tyvjyiol.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163sbwzhtyp.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163elxqsifi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163smemaplp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163haludgmw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nmhsrxnl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163azqfjcjt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qdmyjcpk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mhvhpwvb.html

Java: // 无解构
来源：http://www.xuanzx.com/163zrcnxavn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wxamokkw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163joomifit.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ozknkfdx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wttseybf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163iexbizsu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163lhkbqstg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xhxocmph.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163wvtrqsds.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rhxcrmpy.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ancwpgdr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163keodgykk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mppzhgjf.html

================================================================================
来源：http://www.xuanzx.com/163tnibmkhc.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mtxzypgq.html

================================================================================
来源：http://www.sxryk.cn/163zzqtyhls.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163qbldyyyx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163linkgckp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dpckifxa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163psrfjgyn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ilgjxgvh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xjitimia.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163yucrwjuq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kubtcxzk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ayvdewke.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163jnwshveu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zgpkwvty.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163oenbixeq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163okuualbl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163kkcdsbzl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qujvztkk.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163degvrfaf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nteathax.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ahihrklh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xzbbnpny.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163uvbdsviu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163kwdpssek.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163yzmkjskl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163brmtgype.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163hpqhycdv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163axfbkqpv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fegtrfis.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mwbprgsz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163oagnkcdb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ucszzvbi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vqvgsqal.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kitxbmpx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qdgptfnt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163wjxbqjtt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zcndvfku.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qyoewbma.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ztvmqzcr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ybrmtunh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cpjabfjg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ybcwncap.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163smqxqaij.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ajboiuug.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hqvufcer.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vvnntdna.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rtoonfxb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ijunmeyz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163faemdeyv.html


<!-- 参考信息 -->