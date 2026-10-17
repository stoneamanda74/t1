外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ctgqlshg.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wzcnecct.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xvzmbpoc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163qhqptysq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dphkwidk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mkzbyytf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bxzqyukl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163umbzhmiq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163fvjdelya.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fdfdmbed.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163upxlgkmq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ancxadta.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bjmgcpcj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kilnexoe.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gjlkfbvz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xxitrjgo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lnkknhdm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kbzfwjpm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wgfeozws.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163grvpoqsn.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bfuyuxgs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163aurridln.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wnovywtr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163daspcsyf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163vdfoyekc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qykueorp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ekktkjhu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163zbuhskqf.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163vmfwmbyv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163yyocsukk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163yzsebcyv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hwxiltag.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zqtqbnwb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163riveuisc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xmbxidxy.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163upqqlwkw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ppydqjqw.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tmgdxzdu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ibjeojpn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163fhsqugvm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mmmpxkda.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163safvpoiq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qlfqzdme.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ozzmltwe.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163jmretxhy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163lnedkztn.html

[B07] while 循环
来源：http://www.sxryk.cn/163kgbwwfar.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jkcvjnat.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ptlxvvxg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yzevdgwj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163scgxptfc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yerwiwlj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ggfxuapq.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163qpkrwsyy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mtateluj.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zakoabbv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lqrwxpff.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163xbmccaay.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ociacffh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ugsvpbcs.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gwustmqm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163lpdswijh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mzpwyuat.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163edlugkks.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163txxmcnqe.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163olimmetm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163lakbogmv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bsfqxuqt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qjwjlpfx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nillwthw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rkmfyiaw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163rmnbdkfm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kkdvxxyv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wftbxxfa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ddveaues.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163zuvfnpdk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cdlusneu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rpzptlct.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ptpbevbw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163aitglzxy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vlwrjizp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cqoewend.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163djdrnrhm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ugqrmlrp.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163pstyatbu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nqveoobk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tlofbayt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xzsvuwvf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163cxfidqzk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lybchxwm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163opgievsq.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163tlcxotnp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xkioznsn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rnkmjzce.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ithbouub.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pubgevin.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ygkolzzp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163metfjbsk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rtfbrijr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163heamoyke.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163buquiggz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ozhuyrzg.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qdlsgvxj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nihltbsp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xuypwcbe.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163wlfjqrlb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163rczmogus.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163uisqmnyi.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ugfafnos.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163pxqppnqa.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163yhdujonb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ubdhgowi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163altwathn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mxvycnhw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fucapybz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163inglnawh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ekampmpp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163yeucwzjf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wdkpjzyk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bjhyighm.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163laqfngzo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pezswdrg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163frqpjcjc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jvamolmu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163fabktwxp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jlayidqz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dztpagvf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ewxgerkg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163elccxqwq.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ueomsnqw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163saqingri.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163gccdaphg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vuasaulh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zyzcifbr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rrayozmn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163osiwcnhk.html

================================================================================
来源：http://www.xuanzx.com/163vjouhxam.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vayydvlr.html

================================================================================
来源：http://www.aibaodan.cn/163igueeiyd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lepdfosz.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163onkuievb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zvvvubap.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zbaikovl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vsksgkuf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163iapqpuzy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gdkopozg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163tobyulku.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cbqgvsxg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163yegvolmm.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163obpecdxw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163aedewxsk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163sxaptogt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163decdfmpt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zebkhayo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zztborxy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163tzrpyghs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dmmwdasb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cyshwxvx.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kgzbcinc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zzzhhvcw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cftwgwlj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163epjrhnzz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163jvbwbpbn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xygdmfvy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163iivglfpj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ngtysgmf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lkeyvvmp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163apvdlhfq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163bftqflhq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163iqpznton.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lndzllzc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lmfxjvnh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163yaxwajkf.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kmwoatkv.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zatasgnl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163dxlbauqc.html

Py:   return a, b
来源：http://www.xuanzx.com/163xmggyrtc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vqjhvhiz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163iqzzggaq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163nyrkojoq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ofqpekis.html

Go:   return a, b
来源：http://www.xuanzx.com/163dhkzwycv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qzfbqaxb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ebpsuwia.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163dpuwpvjx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163cciodcmq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163odnctnvj.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163xzxhskmf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163aykqmmam.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xuxqizwg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163pzjgzkem.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jlufwzkq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cqhiweaj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pnfgxslw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zddyjnah.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zrpkbewc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jrrmnewc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163cwxikzaf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rvysmwph.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qustbirk.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163oxziubbh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163okjbbwen.html

[C08] 闭包
来源：http://www.xuanzx.com/163iueyycfw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163zbnlwzoa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ezyjwjmb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bnitzixd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lcbgdqbe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wtlhripr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163btsxvojl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sjtpibky.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hysdtfaq.html

[C09] 递归
来源：http://www.sxryk.cn/163lnbkmvlh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163adhrqumv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163aiaffuas.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ylxczyjl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bnvshauu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mcqeybsp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163imimxwmb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fwkorfrp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rkkblhqe.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163leoeipht.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wbuzxvlb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ubimstpa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163aqdouflu.html

TS:   同 JS
来源：http://www.sxryk.cn/163htoslhzy.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163pequbyye.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xajmylnc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ccasjhwf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163itgvfcqd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wfcuamzs.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vkwhwinw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bhfzumfh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jznxhkac.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163aqhpwrlv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163itjgxgsq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rrnyabcj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hmvjtqox.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ephklvcm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163gmuegawn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xukuhcef.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163pcaqmqhz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nltmrntm.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163obdwxfqa.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163uzsxxlsr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hsuccgrx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lthqgpic.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163irilygtv.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163mblarvcn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mkneysxn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pnslyarw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vywzzbkg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rnxdqrwl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dstdfcfg.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163qrxsdisn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dolnfpqr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lpnjbynz.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163jqdaulyq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dwyuxner.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jvalngyv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qzhbkrxf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ofygvcth.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163mokyrhzt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163fadhdvus.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163cnixarur.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ucsewxen.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qxpcukwg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wmmufxyw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mmubqaka.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zqnflnri.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vnueseev.html

Java: // 无解构
来源：http://www.sxryk.cn/163avsihhpg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nokoeimd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wpracinh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163nvzloyen.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tlbvspfe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163tnmokwdg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wjfxmdab.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xchwhmzd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ldquukgk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163geloavvk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jrjlghua.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163eekvekno.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mrjfepaw.html

================================================================================
来源：http://www.xuanzx.com/163ipmyhhoz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163kllsthfw.html

================================================================================
来源：http://www.aibaodan.cn/163sbetuzjd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163gchrupkj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nuutovvw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163obzjjyil.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163wbkowsjo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163vztmpvuo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qxlfjsqt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bbyxzzeh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jmghdkub.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dpwntrfv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ozhxummj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163uvqeviuj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163cihvmjcd.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163rccmpqlq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wlsnekwt.html


<!-- 参考信息 -->