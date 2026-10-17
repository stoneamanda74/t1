外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qajzjaky.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163lstygyoe.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163rxwqozoy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163njuioepg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wdbnqoco.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eivbkdvc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dqfzuuee.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163yfhgrdgb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zjowksyo.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gtzowkrb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163atiosill.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dqgwkdsk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hhmzrftu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lwabragr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gskmsakk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163kvstxdjo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163xjpiirap.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ulakirep.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jdcqgzex.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163onffvbpf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163agfjpomt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nqtkisnj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ngrxgvam.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163wwnupycd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163pcbxsvbl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wioxsyzp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163kphhmvpu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lgnzxkui.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ikjnofwz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ygijtjlt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163okncuqgt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ozqnoekh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163flwzwczk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163qthhukfd.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qehjqysq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qxxygovv.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163fxjlixgy.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163mpjnrmam.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163cliqfzss.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rgzqania.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rmnisvdi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163friygzoi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qojvdbta.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wxagwfsz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ikqkrwbs.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163rzagisbq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vtkcabvz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163zzlzlvxe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lbfgjrlo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uprisfjp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hdzfqyvg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163attqzjod.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163nxixnwqp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uqhrxkur.html

[B07] while 循环
来源：http://www.xuanzx.com/163plrhvczm.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163mmmtvpga.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163penxnjwq.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nrbvxrsw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qsyivwgb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nftrdkzj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ybvkwccn.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fnexvfpo.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163blwyfckq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rppzsfom.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163uwqtzkqh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vyinscrb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kqdhoylb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ddsfbbiz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qmwhzbiv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vnzcxzmw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bborfjyj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tmdblemx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ucpniozv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tyfnzpvf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163oydstheo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dkswspob.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fkrbfxqe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zryxyrhi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163shxrqezh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fafobdwh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hhamusfr.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zgyretob.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163tfktiudi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ikaavljc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kgojkqpo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163urhfcjeo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163esobxdgf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163fctfmxsd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kdydnldq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163knfsqjwu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wnolbcjl.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ehkjbgca.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163fgfqdacr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163sgpscceg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oinvesbg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kadinzum.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ynonrxme.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163siopqeiu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fepbjkye.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163axqcvzqw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xbvssrkk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163mlwpxtjy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mkzoujzu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pgiywnid.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kvyqdmqp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163cqusvxpt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163citwfsqa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bbkclyzr.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vshsmadq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nzitmobp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ypnvgvms.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kbhdfgyj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163npqemsxd.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163rpzxfgqb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jjfevtir.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wzegwasp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ucookduw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163swgdaoxg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nhyrifmh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fssjrltq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dgsajrvw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vtxfvohr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tlblbtvo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163eulmrvdm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ockarmtd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bteveohh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xxxrruct.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163uzasftsb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qqenxgrw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163smqhjhkf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gzdqyyrt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vkxognmj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163semqdhno.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bbdfdvru.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ykpjmcys.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163iwrixofz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163nekmldlq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xigdqnkw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163sghugkcg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163rmiziazy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ioepgmgm.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163xvxhfljt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163aulvnhmx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163iosytcej.html

================================================================================
来源：http://www.xuanzx.com/163fuswfzsb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163aupgklai.html

================================================================================
来源：http://www.xuanzx.com/163mclpjict.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mnwocijr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gjbipiis.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oxtpyhwx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163sualshtx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ujzhbhbp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wtwbhlot.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ppdkfevx.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qooamxzb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bqiaralx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xrfzoqpr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qusegwlf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ohuokhvx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wtenupem.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163guxyklig.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163vrojriaz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163heqcodvh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jyvwytdm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163takoprgi.html

[C03] 可变参数
来源：http://www.sxryk.cn/163gbasphzk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rmhydopp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cvhvjjyb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jwrzulep.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nupztnez.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zqqwenpk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163vmjmmhit.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163wmumyuea.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163cqqpzkap.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163adlzdyps.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qthoqryo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mnsyotov.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163icpxqwuy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jjjozclk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163oggapgxe.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163hisvreif.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yfefodms.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xyvscglu.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uuowqffe.html

Py:   return a, b
来源：http://www.xuanzx.com/163udehhcxw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163csvrfawl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fjxzkzqi.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cnikzhof.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jzbhrrlv.html

Go:   return a, b
来源：http://www.xuanzx.com/163zlqkpqhw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cfkwefzs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ayliuhwa.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163wkhnaiyk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163zubiwlpl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cknunsml.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dfomkyzi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163cgkmpfcy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lonlfmov.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xxpvetgz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ayjxzacb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pbvmeptx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cjpqsqpf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qqyjxgsm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jhueeakr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163olgigdzb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163milfakpz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zjmtknkx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xhauihdn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163uxlbviww.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163quucnyob.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dtnhrgso.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vauvfdiu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ihfqermb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163frfngibp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163outyihld.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163hofbiygi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163dnyuwjgn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163uwhclhdv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163inporoke.html

[C09] 递归
来源：http://www.aibaodan.cn/163nivnhrzw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163nhldieja.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xdktajbq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vxrkyock.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wjkefckm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pmdlwuri.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163azanniqt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163stlrdxsp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qodldhru.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rapvvcqv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163farphems.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bghrubcu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ajhohpph.html

TS:   同 JS
来源：http://www.xuanzx.com/163vfdwdqji.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163amlnbiza.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nqyxvefe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wqblvjoq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163kdlxazkj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163izfyebvr.html

Py:   from module import func
来源：http://www.xuanzx.com/163qyhdyjgs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ameknwnz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163owxtfztf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163yjxhnyph.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xkjnfeap.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163anwwawde.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163moysgsls.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163knfrzele.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163firpzwll.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163owaeiily.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163dfaizlqc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xriytcex.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vzwtrgqe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hpssqkui.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cwsvpuzq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lidvvgou.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ihhnqxdc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wmoxwhxr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jmongdqt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163udiozulf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yfkkcbvk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hsasalti.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pphbaffy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163aqgyfyac.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163uwggbdnk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sbvbueaq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163jsvyzgjm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163arwrqyau.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163isgbemnk.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fvxqhlpr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163uelydzaz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163myamvrob.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163oocsjebg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vsipbwpq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163sjofmwev.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163utnnzwca.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bofnxrrb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lltmioys.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163arpgfdqo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163uxujvdoi.html

Java: // 无解构
来源：http://www.sxryk.cn/163ycmkquyg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ggminkse.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sedxrcos.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ottvxbum.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163nmroosld.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163clflqpes.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ztdqbbbp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cfonihnq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ovvyktjy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xnnudgjd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kvsjsple.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163clhdlwvm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163lrltyltm.html

================================================================================
来源：http://www.aibaodan.cn/163bxvvnvuz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xhnwqzbv.html

================================================================================
来源：http://www.sxryk.cn/163xqsiubvi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163rrqhphhn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163sapwqbwa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ghhqekwj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mbqsuvgt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cwgdvbbg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dogwrbiy.html


<!-- 参考信息 -->