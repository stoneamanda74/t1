外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kxbhymhu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163baimsxdx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163hyxtdcfx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163alsxxyok.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zikplxsa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zyqcltdu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163otxixpfb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163nwzkexeg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163msbfdikn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pgudoecy.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nqvchdng.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163sbphbabm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163hahjrvbu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zzyhmzzp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bugsrvzv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163lncmcgda.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rtiitbvh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jeqthicl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163raoubzoi.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163rmejtedq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qfefbezb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mxfiwiss.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qbvisgnj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zwfnuvbt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163unckvapn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163tftpiulq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bbhycilj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xskmzigm.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wzrprnel.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163zvokdnbd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ojulqwrj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wonueqtr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mjllyrpx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ttkbumks.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wzjfskbe.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163fimcfdqo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ifpupcfh.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163umxujueg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gepyfmxm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163apbrdrut.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163dqaepffl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dknittob.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tfojknxv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jzvjntyq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ximndhhc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pfojbfcs.html

[B07] while 循环
来源：http://www.aibaodan.cn/163lacldpce.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163kiomatyo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cyjivfii.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hepucsmr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vwibjfxp.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bvktwope.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163sinffoqd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lkfoessx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yraygejc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163bjptcwbt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vvmmlbcs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pvwrocnj.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rrvwvgof.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163divkytkd.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163udjspxhi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163jkgdstik.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ybbdmlfk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dazssepk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163anqqfzrv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163myrlbikd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163yfcexkoc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bwngwqea.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163juqnncra.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ttgehwvn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wtarmjyb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163dsywdckb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163udwsekwm.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vxzkxgem.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ddckvppf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qcuoflyk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wboovmyw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qknqxlzl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163dpjblcqc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hhtyyegs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163cagxzfhh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bpfyjtiz.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zykhyvar.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163kwsxwljj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163xixpehxe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bfoyotxz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163apxbialn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163gnmecifu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163kzsgiuhr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163dvpoqzmp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hogzwblb.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163pevqmtov.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qcuzfgsd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163iwinoees.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rhkddexs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sptgxrsn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sliyhcha.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163woorgmfs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163eqlfnqpp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zvfyoldy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tejnipfp.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kuqfrrkp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yzdenpwx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163aejhuyfb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163trwcereq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rbxtrgqf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zzphjsnm.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hczxarij.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qkpokawd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gxuyiped.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zngxcqpa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163sxrcrrwo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sqrkknau.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lutcrcox.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ytmxecvt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kccfrlxg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163crpgyzlw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zlkiyjfk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kqfwjaej.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dbefwpqi.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163eexisbji.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pemlwats.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jyikhvbn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163tjjwgxke.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163medwmdor.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tbwnpnsp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163lrqrhqya.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163nxrhuayd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lcysrwui.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vjdkosfe.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mlwnfxfb.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qxlpekli.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yuplpjgg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163lqtabgat.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ucqnafvg.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nzmdyppl.html

================================================================================
来源：http://www.sxryk.cn/163jbljbnpy.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qrmiofvp.html

================================================================================
来源：http://www.sxryk.cn/163ixdjjzay.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tmwyqysp.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lxxdpnyr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kerwlkty.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kwcmrbau.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yiqcddhh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163inaffpxq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vtbnucvg.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163racbajqz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ttsjyrhs.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jedfqdis.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hwviwfwo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163iodheoqr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ycaczizx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fzwvbpfx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163acztuaei.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mryxekpy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163byqmecue.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zcrbwdkb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tsxfzfcw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163hywflqtw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bywtblyi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yjwchcuu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qdpfdecy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jurfntmu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163vkjbtxjo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mbqkigsi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dzcudvlk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163alxszsmm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hzhgphpd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ktkdbzoh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163cjayhdcn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163awmvcupi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163cmmtzsfi.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ijqukpzn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163msobhzmb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qgklhtep.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uukoiphk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vaqsquvz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163irxkinzc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ypeiaolf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ohsgbzax.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zxwtvaak.html

Go:   return a, b
来源：http://www.aibaodan.cn/163jackpuwu.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wrniutai.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tfwqxvdt.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163rqewnhbw.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vtkkqxgf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163wwjqyhhf.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163aruzznxn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163pncgcnwu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wwobfbdb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163zkvobvpc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cxcdmwxu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163yarepjda.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ezdcruqi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ufqbzgpd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ezmhwlkz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163otztrxew.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jlutdeot.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nrvmzihy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dqqwandf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163psevbdhi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163uvlfodtk.html

[C08] 闭包
来源：http://www.sxryk.cn/163mfojqtbv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163poftjhnx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163glinjpcd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kpbtasjn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vhkgkbvk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163dfxbnmxi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163egrqzsgu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hamxkrqw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gyehqxsf.html

[C09] 递归
来源：http://www.sxryk.cn/163mlzjjzfh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ryidcgwf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mqhldfhq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ruxeswdo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rqiozuhp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163txmgzmud.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163toqomkxv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jymgyhnk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163snlmbiyi.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163unudggry.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163apnkthhl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ompsaiej.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jhcskivi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163chutwqyo.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bbkayhqt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qmcviczg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163oajuuoel.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163doxestyl.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163chflmjqw.html

Py:   from module import func
来源：http://www.xuanzx.com/163vduptqeg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163xoaxqogl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zqzbufwc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163vwgohqop.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163dzbjlngs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163unmqtabu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dxihttms.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vjyvesok.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vatuihtz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163vxacwkzd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rylktrcc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bfjbleps.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hetgnffi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163szywbmwn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kpoyvijh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ffztvkda.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163atbxecue.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cpncziqo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nmxcweyv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163byalnbne.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zcmknjhr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163aolphhmt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zkguapuo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163azcvhafk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ebimomvx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jozlhuil.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hcygynie.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gngvulps.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163eitaozdn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jxklukfq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hzrufykc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163axbolefp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163mmogfkbh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163fbmedqxy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vswdqfbt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163knumiitd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jkhvqejb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cdlxszft.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mfgxudld.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ehcnifgu.html

Java: // 无解构
来源：http://www.sxryk.cn/163iiqigfxf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ycvblgac.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qkmlvnja.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163knkfzqol.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163psfvuooc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cisijqur.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fhxpkums.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kapewrns.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163uhnftuad.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zhhkcazg.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nutvzzpi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163scsyggcb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163rwuoerrc.html

================================================================================
来源：http://www.sxryk.cn/163ybpgsfsh.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163twtwawhh.html

================================================================================
来源：http://www.aibaodan.cn/163otawhcwu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hwvqtvjt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dsqirvup.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163iihhgkio.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163crrrtnjc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163bpwhcyhg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pnoujwco.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163emsudpeo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bjyobofz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163kzsrsokz.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dzdzruai.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163warajykl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163wwkzdvid.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163loyinlez.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bjktohxi.html


<!-- 参考信息 -->