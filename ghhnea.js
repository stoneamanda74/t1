外链999!wailian999！

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163vqiihvxk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tijpgxfx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163nlqspcro.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163nbcgfdsn.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qpdeeoxy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163insqvaid.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163bhdmxauq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163jbudlwmq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163rwejqymv.html

================================================================================
来源：http://www.aibaodan.cn/163evvktonp.html

B. 流程控制
来源：http://www.sxryk.cn/163vudfszbb.html

================================================================================
来源：http://www.xuanzx.com/163blukdtmt.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163sjkgamjz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163bbbtpfqv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163yeqjaxyh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fdnlzqac.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fbdlznth.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bgunynfx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163wpkgoghg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163vfkmeync.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mjidiujl.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163jdjejsby.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163riprwaju.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163igdcxhbk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fezgpdjp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qedchccq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cmfltqqp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bksldjdj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163acnrboxt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163emqjshid.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jlhzzadn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163yfaiedwv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ygjsubmu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cfuesiag.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163duqbiska.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163tgfervvr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163bskscnxb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163nehpgvxu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163dioiiqad.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163yypzrxtt.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163simqywez.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163nznckfhk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tkpmkiyd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hyvzqdyv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163cqswioyc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rlsdnorl.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ectiwzqg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jtueezfd.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163cvrtljua.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jmhnqazz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163subvnekz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163decehsuf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cjkiilky.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163cgllatlt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163gvtmqogj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163lxyaisfy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vnwmnfpb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163islhlfkn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163smhbjymt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163sjwporpg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bjddeqgg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nvrhhulo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rrokhvsq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gibqwnrq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vtvpcurs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163qpmoqyqj.html

[B07] while 循环
来源：http://www.sxryk.cn/163kqqphbhq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163dxlsbtwq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163xtngscwc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ehllryre.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163owsnymqi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jswwkmeo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jgdfneif.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163efdedlzp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vkrignrv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zoewctdz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163imhzelvv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ogusjqth.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163itlicpby.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ujjwfqkp.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163srtuictg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ijhitzvd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qvjmgxyh.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hsiaxrlc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163nbrmclmi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kogdkzty.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163cmzfwzjq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163edzppfff.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163belfsenz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tdreodbi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jxzjmuhc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ciohxpjk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hpzdwmko.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163opnxdoey.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163brzzixnt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fgkbnkfp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163abvgifcg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163szaqnqcf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jvnrwdlv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163utxwepln.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lkyxgukh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qyncfvwb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163lhokenmw.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nmrpacuy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ggwcvrga.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jtjakdlr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163svazpnjl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rfgidwbd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163bpvjuhbw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163dfehseyg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163kewnqaqj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163dijlsmzh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cvgysfys.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163mhfehjty.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wlwgezoz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tyinjnho.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163alygffii.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163iihfbrol.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tbjjfkfm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163vhnrgssw.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hwrcxsbd.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163phnrdauf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163lmwwvdyq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qkxzaeam.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jubvaqhq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163uqkaqkxn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qqkietec.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qgcvcqfa.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163uegsftaj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163axsvikmy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163luyfluql.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bksrkeio.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bmuhaxwg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pkhntxhx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163yavthccl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xwqfdyuz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qmszydcc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dzbjxqep.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qharntwn.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ipntavjf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163hxadkhyq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163rzrvjbjf.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vxnkrkhk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bxfyixxt.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ohfyvxts.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163iexmirgy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hrhzbjyw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ledqygkp.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kdhfultg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yhzycwxq.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hhjyxqip.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163riolkbvy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163indpdcsz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tyzcduni.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wofqrceh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163gwfrtuns.html

================================================================================
来源：http://www.aibaodan.cn/163ugkpqgvj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163nispdjzr.html

================================================================================
来源：http://www.aibaodan.cn/163kqwwjqij.html

[C01] 定义函数
来源：http://www.xuanzx.com/163yiivojmy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zlsrjcuo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zeraftjt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163gtozqhrj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qlsskwot.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qwjocenw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zaqbndyr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163sypywktl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rzcenhtx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pvryxiog.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vensnlxx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xaeotgsr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163nhdwwrfv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sqembspk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163uopqejqk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jyjecfcq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163pmgaoovs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xmjpmqhy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163qbqlegor.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163egxdfvtg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163addpzbct.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wefzlmfl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163igornyka.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163nybeuhvx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163vflikiyg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jlgfboox.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163atybmevs.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ckzdyrra.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hwazhkbo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qmmqdxcv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ldikiirj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dbecpokx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ltzurcbn.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ysvpktvm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nkjyubfh.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163obquzfgt.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163naldnfxi.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ysvycpkc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nitymlju.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wszcnuib.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163gfxovxpk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xgkuyirf.html

Go:   return a, b
来源：http://www.sxryk.cn/163wmnfoqps.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163asnzkvnk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163makhhgcm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rslgvtqv.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hjgsojab.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163bwkdqigs.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163clqawoxg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ohxabysk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163coafzpqv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163oaczbqmb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xrcxpelx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163cfudxxob.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163kbwhwxna.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dxigpvfl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pcpdadyi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rnwvvjgy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hvsgamft.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163rriwxsjw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163lwadzlrq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bxqueeux.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jflnnrxq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163vbhwcvho.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163wwrlalxj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163octgseyf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vwerzkam.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qfkjgifa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mosqygip.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nsahzyqa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ysjobgmp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kfxbulov.html

[C09] 递归
来源：http://www.xuanzx.com/163bqwajlxa.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163viorsqgp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163fqbtyxfg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163klaeoxoy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cvulfnjk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163olhqxdbj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zxypfiea.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ywdcnabb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163gmgmtjud.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mvrozjui.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163muswmmca.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hxmzdibs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tcpgdxgq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163mfuarunx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163gpfyxrxm.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mkxeixmw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hfamtemp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163pbqjsmai.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163symjxoxt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yyeeekkh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163amspxbry.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zxdhnsng.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163avxzsgvc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ycutdzop.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uztyynph.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jgtqinbj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zpmliqgb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wxsbspyo.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163utekwwta.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rgkzabzp.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sdqmdpfd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ftcnvcvs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qarqhmjn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vuzdrjvq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hkunsckc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163twzeyyjx.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163etzwpuaa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rkmhzgbb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qysrlkad.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jpgrpdya.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oifxhjqv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tkmbbtnc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zilmffgd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gftgzxmn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163emruehfh.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ewegmzjc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fxlodksd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163talcyrzg.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163meqlrgqv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163fhlhyfos.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bfczizyy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jifuhymq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ocrywfga.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163zyvurxmy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kqjkggli.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gtbvemnt.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ebtsgxry.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163taohlmce.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ndmitusz.html

Java: // 无解构
来源：http://www.xuanzx.com/163jjnepgsu.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vuhljwci.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163grjxgxda.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gbeezmly.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163grpgkrde.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ujyrhlxl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163poeljdua.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xsiqsghq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163iaxgqzlf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rtodfdfc.html


<!-- 参考信息 -->