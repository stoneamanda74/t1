外链999!wailian999！

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163pmqlnnee.html

================================================================================
来源：http://www.aibaodan.cn/163bwibiwhm.html

B. 流程控制
来源：http://www.aibaodan.cn/163ymrkcthv.html

================================================================================
来源：http://www.xuanzx.com/163jigzwrph.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163glojsgtg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ourxgmpg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ozstiytv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163daylavlf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163thlfpemv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lnryyknb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163dwqusbcn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163yykiaouu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sshgisoc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163pkyrmzve.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163szchoffd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163zieuluon.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nwiwmtwq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pxpfrxkg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rrxpegzx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zdbhghew.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163msvjsolo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gyaeldje.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163crvoqdqx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163sdhhxbzc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jjulflpx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uhleylbk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gddiufao.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zmulnyli.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ceyvqwhl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163dvwstohk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ysnoepjo.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163aqjvwwmb.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ezluywnf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ezllffhc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vyixzgwd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cjqiluxq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ikbhmbys.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163iednelnj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wqloabvr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163slhpoqeg.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qunaeuuy.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163imcsnpxm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163erjmxjkj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hovfvxqi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163llhfdpjn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ptoikqjv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vbcceapu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163vfrrtprv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163xjvcmtmu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zzlqapxh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163miqrgbwa.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jetfvxmq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zneeylpj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qoxyzyno.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163nsejschy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bwgkmpch.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163cpyoeirb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fnfklznp.html

[B07] while 循环
来源：http://www.xuanzx.com/163noseivwh.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163btgowmlr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wnlgrtnp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mkngndjk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tqmrkmvp.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hbzujxcx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mklkgueg.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vwborhqw.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yqbanoui.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ujzfiqid.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kflcahzn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ymraasic.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163feauoent.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163flyolnbz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ajqxijxp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jvacplnv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163luqymnya.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wdhvzhrv.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163qdkzpppg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163rajmaghj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qtzrzuyi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zwpgjjsv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cpahlapc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163iehggwpk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163jjythhxt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163najnpvgo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jlnhyjvk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163munakpbx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163eetrlorl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163sauiolqc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163opokoikz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163todlacta.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163efeoerkg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pesarohf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163agixzsxd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163qgjrzrov.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163phnwiwtd.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163dkbchzgi.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jcpzebzf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mpyfdift.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jfjkzixo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163faqozxre.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nlrqtlsr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ipvfxlnc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163azijsabm.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163yanmcljx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163gapgsxzz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tdqffstz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163okwdhgdh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ymgzujtu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pwadasbs.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163sdojuhmm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163iazyiraj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163aamjhipo.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qvwhvujg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ktysfxjr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lcfonssu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ssputogj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jwyaaifd.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163wgpmayel.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yedmcbuf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ekjvuodj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zvvzibrn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rcrnkrlb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xuwgvaap.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163qwgarsbx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zdgeyfjo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ngaiiqye.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ecblxekl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cogmgaid.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163eghlxdlo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vccpdxtb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pbnyhskq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ajsgwngb.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zihmvrue.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163udyqmxxp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qqwdeftt.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gjjsbyib.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163xzxhtaod.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ekoedjlv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dqhhaott.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dqzesepy.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163slwjugin.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163waikyoki.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ypktxzdq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163xzbpilfu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163pggvzpiu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dycrojyu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tvekiczl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163aqnqfomk.html

================================================================================
来源：http://www.sxryk.cn/163furhwgum.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dyotqniw.html

================================================================================
来源：http://www.aibaodan.cn/163jbsgqpgv.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nltjctaf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jxwhsiwr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sfyvecom.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ntkgjsnd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ryxnciqn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163awwvvofx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163szwsxysn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mnqndzpd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nxsvjswe.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rsbpvjxm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163kvzljqop.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xuvlqcsn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163zxwjjrbl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163avjduqbv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ldkkwpej.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163iwbqjjdl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tzfuorrm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tnvbrpyx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hbaafohg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ynzqbzey.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rowbabtc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dkjmbcki.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mkxyqggk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hgvbpcgc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gmtwzpsk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yaiilcln.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vrvuieja.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xnwusaou.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163olyeddqm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jcajsyod.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163fbbjrgnu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gbcxzqut.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wrbouqch.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163umbnheya.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kwmmnlbt.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dknngwgt.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rhwenpeu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163mcjdhlzo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163wdnaduxt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wwolwwcr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163glfiufjy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qmeuxkat.html

Go:   return a, b
来源：http://www.xuanzx.com/163rircpyqu.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vgujpzpv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163fwnztdms.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163owrvvmys.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163spprqhus.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ijqbeauu.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jjtjdlnp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ydwxxhop.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xcfdkaaj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dveibydh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163nwolopiw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zetthlyh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gxmnvqdy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zaigwnna.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163yxeyspvy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163scdtdizl.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zuqjmppi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163lrfoabap.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163bgldmmkb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vkqfhazw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jyucuoau.html

[C08] 闭包
来源：http://www.aibaodan.cn/163xigiioku.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kgbyrrks.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163yfpqkaky.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zlmovcis.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uasuacmy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163flricbca.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jgvkwbvq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163rzewwolj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ekugxzqs.html

[C09] 递归
来源：http://www.sxryk.cn/163ekaftjkt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rypvxucc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163aqdarthm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pggzbdap.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cicypewf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vpzooizr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163yokswhhv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163csaqmseg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163buncmwuq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gvouqiuu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163abudyklr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bynaszsi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tthsvskb.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wxhdbgho.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xakiunut.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lwurhyao.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163quvuhfdj.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nuulqrsk.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163bhyvgswx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163lyffhhlu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163nsfpeydn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zbbdhhpv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vlbafgrd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xzaknpxs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163glvcfzot.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ztxluhsc.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dcprlzov.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dtbbjxyk.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bfcywgqc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lybuflaz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163tlnuhplu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hchtmdqi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gvwhakme.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163prciiicv.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xdhimkpq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163uccrasfl.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163rtpnnkbl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163frqkwtjz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jypjykya.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163wrbhvuzq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nxuvqmjr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163haaefdpl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ckuuggav.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wudlgejy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163wrmsyzgp.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hjflvayt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163wdhvtlaz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163becpypyt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kukmkoih.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163xfqcjlym.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163krahphsc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mjjcicky.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163tjbvurce.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lkqpopsw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gijnxukt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xyllwnhz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mfuqrnmf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vniwjfbf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kfcmycqz.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gydfckgx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163viimxqlt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wtbpuuck.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163werautry.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ekpgkryg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qjeafjew.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xouszntt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163oowjivzp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163orwqmyeq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163rqwwrbld.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jufanbrn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bhrabark.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163oubvvrkt.html

================================================================================
来源：http://www.sxryk.cn/163bpapymye.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163neraxoaw.html

================================================================================
来源：http://www.xuanzx.com/163qohpuawt.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163nmjxdfxx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wlbmpnfs.html


<!-- 参考信息 -->