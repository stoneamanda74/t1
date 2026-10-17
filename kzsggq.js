外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163secjbcei.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163krmwterc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163kfspbasw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163engttuno.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kxxnktcj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163riowobht.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iazzrbkr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163cyoiubix.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zcrtjdet.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kijvxjop.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jcptvfea.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163nzuydlah.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163brvtsdkr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wiacypdr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163efodegww.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163dqzveqry.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163lsnkqlhi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ddbqpldv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163rvsqlnfj.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163oattdomq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163nytjftqi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163uxgphmii.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nqolgdqj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cpbrzcdr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163poiuotrm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163peppaxtq.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ikwnsnvn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dvynjmkf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163sszhadox.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rntplqge.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163xncucjjt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163eqfzhwwo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hqekphjh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xdffdfuc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163bwllrnys.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vfowupgj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163wjefqjpl.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ifaxdkvk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ppubmopd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163torrxvfv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163piprwwwo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163viweatue.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hftwldrw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163haofugwn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ddyfrtnm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163hqkstnad.html

[B07] while 循环
来源：http://www.xuanzx.com/163ismdrlsq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wimgmodt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163vjjwdqwc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mberlvul.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gaycetmu.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ogmdeajm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163augrzont.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163qwyxkzyd.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xdehrwla.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163addkrlyd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163asmroxky.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163hoffvvzb.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bzdjcrob.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163drxqdczk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rokrbpce.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163zuoqpyeu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163enlxznck.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yotvokjk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jaurfanh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163harmydcb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163drgnlxkv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bztdepaa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rxoijziz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vyadnsrm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163npjvtshs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163mxelxoky.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yknmzwcb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163wjatubzz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tysjdfep.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163kzzulger.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163oqidxtyc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ywjszdpd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ztyqftgx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163evowxapb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bxsskvto.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163srkymmrj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vgkodpst.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163pcbqdcxu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vsiphenj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vserypnl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hvxhanou.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163txmfnast.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jigkwxak.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wvjxoxcq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tbjgkblz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163cdrcergn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163lfyqszzd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wtwzdrbp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vtaybxrp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ktjdisuz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rtbqcaay.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nmtwyufu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ywddznma.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163yeaemhri.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vcmvlvjf.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163bbiswqnb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xpqtsdpx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zhoezrub.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ozwqpccr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nrmpxkif.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jwcgvbkx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163etoejnwb.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hasscxdd.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163razyindp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hevoyqeo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kldccyjm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163oyotuvdo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163muezvcix.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163yppzytdq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xhrgnuky.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163wjbzpeyf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163jtyhaowz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dwwokejh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cnzixqyv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rbkxrejd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ygejouxf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163tofvpwdd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qdcrrnwe.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163msnlzbbu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rfeydxdr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163uqzdfovz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nyklceym.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xdwpyhos.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xfcegcqr.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bqnsgyrx.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mwfgqflr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mgqixads.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163yujkxjzt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163swulrxaw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vjgsydhk.html

================================================================================
来源：http://www.aibaodan.cn/163zxsiznve.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lwtnppxg.html

================================================================================
来源：http://www.sxryk.cn/163rrfchhuh.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lfnbdfzn.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rozetpmz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bfojcvyz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163czblekjl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gvtoxbag.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ophdneve.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163buwjjhty.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gccfvwdh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163djqefsba.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ztxnsvvs.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ptvjlzlj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yhktuxji.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zbqpshsw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sslhaxyp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ymwqkznr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gvlovbtn.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fhacuxsm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163hjtdxrfr.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uazokdxk.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163oatkipxl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xaadjhol.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ilmlcfze.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ihkecedj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163srrbthgn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rdhwzizh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qnsenrux.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xnprnqjc.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xvyamkwo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yzeiqpsk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nkypncgd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zhewzooj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pdibixdy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163tnsbjtag.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163svmyfgpf.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cloelrhg.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xtbzvitp.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zczvjgqw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bneedvmk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163amymxqca.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nawzalxs.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yamrwfqt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qnywvegw.html

Go:   return a, b
来源：http://www.sxryk.cn/163hnekimix.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ftdzruex.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qukdmuct.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163atwyuryw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qcyfdzam.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163acokjfxw.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163vobvvqmj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rgdjnfzw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yengudhx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163vjezsfsb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ogptfejt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ydldrqge.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hjbqinbc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sksutmpw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ogixeitn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163qrevpuhj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163sdxmoihq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jvpdywuh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163umenawnn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163uemvzddv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jpankfkt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qpzixznr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163facktiln.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kbcqsxpi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uiiwmzab.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163blzteyal.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yygqxmrk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ourqprhb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hbdatbjz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gttfpggw.html

[C09] 递归
来源：http://www.aibaodan.cn/163emixqmod.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ormehxyr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wfqimuff.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vrpfqqcf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lxjpydsq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163fzmzqpuj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bqzxgcei.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163itxqblky.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qmxpeevr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bcsiuwfx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vqhuwrst.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mrsxevvu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pexewphc.html

TS:   同 JS
来源：http://www.sxryk.cn/163umknpygx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ydgscriw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163vrhyzjhz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163djefecvl.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ucgbfgdi.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qwlblnza.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mikzgbhs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163brvaeqzl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rqwligmf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gkjhpkxw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163azfeicbx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163woqyjkbt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163yslarpoj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zzfimcwj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163urgmqykl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vvdiqmuz.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fvbetebh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ygagpboy.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163mlmlhlvw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163tpdesfhq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mrsvystg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nmodrugp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wkdvwubg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ssectdxd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jrcarkth.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wlxuioug.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163drsofwwg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163myrnsexr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rryowdao.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zfbvqgfk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jcfhgwpk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bzxkiwsd.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163cyxpfenz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163epvtuxcc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pfokxkep.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dstjbuip.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163edvqekkq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gjwoztgb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ipapbukc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nrncggwo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163arrgovvz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163bulevoge.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tvcvhmhs.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wijcwsfs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qsscuepf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163cyxxwotc.html

Java: // 无解构
来源：http://www.xuanzx.com/163dsjfskku.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163wttnnmua.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163jpffwsqm.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163mbjsakbv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jqtffrex.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163cddzeyyx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ugwyppgm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bukveckz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bprpqenf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163dxfsofou.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163viohtzwj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xxxoowam.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mbtzfmrm.html

================================================================================
来源：http://www.aibaodan.cn/163aqadswse.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163oocimwuq.html

================================================================================
来源：http://www.aibaodan.cn/163pqnctzkl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163tlcabekj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163xnemayoq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rwimyipa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163oevkdqgj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163juwkjhgr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fvlriorv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qfvilnkc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nzcbkoae.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aowucnee.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163lgixlinm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ifrjzahe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xryfvogt.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xpgzarbu.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fynpvfco.html


<!-- 参考信息 -->