外链999!wailian999！

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mpsleiay.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ulebvzvg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zbqdyzfl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163pldpttxz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163kntnhnye.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163inonhgot.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163dbrsydfo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ncupsazw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163spkqfnww.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dtsgdpwg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qxquzstx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ilfuixmc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qcshhldq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163deitekau.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hubsmrjs.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bflfrgzr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163zudanidu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163zllxabcf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163roadqlbq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xqeqhxem.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163kvbbsnad.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163rsbrtgrp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163hzxuleqm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ftugwdne.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163tqmmsrud.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163okxazrzp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gmdxhofm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lsedkyqb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ycbglpru.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163oxpopabd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vpeaanmg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163vbpvgjke.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dkbtnrps.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163lwrvyngb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nageknwx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ugtowgxg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wigkqeub.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ztdxdvxc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163oaouhzue.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163sghctjhv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xhtypzrv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ayiczmpx.html

[B07] while 循环
来源：http://www.sxryk.cn/163tzdzkgmc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mecynput.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hpyyivgt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163llwwjpqs.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uinpguvi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pmxrvzea.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163hjavedui.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163nwtqcder.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jfgecsnf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ubjyzdrv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ncxstlww.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163azqxpjbt.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pmespqmh.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xywqanwv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xidxvxji.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xhiwdibv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fxpipzoc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dhheplqk.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163rcrggqnq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ygkdrfqv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163grrbthmx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qxciibef.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kqnyojnq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qtdkpeao.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163dsoekagc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ldccvrws.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qisazadk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qfkhykwi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jsygxhox.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163kpdtngbj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rwybssfd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163byxpaimk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163smevcumz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hypnyaut.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hyujoaju.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163fklpwdik.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mxucltde.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dwrdaedr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ppbracrw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163liabueih.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163uedxgbqs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dkuzauwg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ehodgzag.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163htpsszrn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163mkrdrfep.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163uhxjdvxt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kqjwqoxn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jxgkwzju.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zlyyicxf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zscpwair.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nobopblx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163pvtrqflz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lpjnhzrn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ebyseqhy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dexujfwk.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163eyantgob.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163meoiamkt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ydpxouty.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163icwmyyhs.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ocsfpidf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qtrcamkv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nmksjrsm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ookdsmkc.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163nhrtiylw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kwgphxdi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163uqxngemg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zsdvonnd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kjwswkke.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163aiqpjdzt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ivvdgewq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lvvvealv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163iapzywvk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163czvcocpu.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vnibaexw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163celtovfs.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163qusqvcim.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163kguxbxuz.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hapvocyv.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qkwopnnf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dkidlkbv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163geuesatv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163oagwvpxh.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tfdjqucm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dttmptjl.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163qpwwnmkc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zhtcmzxr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163fdmwgkjh.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163omaowwul.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dusuqpey.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jqayhcwb.html

================================================================================
来源：http://www.sxryk.cn/163kmbbpqza.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rqekdvgv.html

================================================================================
来源：http://www.sxryk.cn/163xbehmfck.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yfmioasy.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ljhdenlp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lxnjngvx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gepinoub.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iyfeuusk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jafpzexn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163cumbdjds.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ptrxvquq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pytaragz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tartuecj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163zllfydqz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ixzjldwe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xydvitno.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163afrlmlwa.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wzlgjdek.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163clngiktz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163kwrtfsqd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163uqsydqeo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163dpdmsqcc.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hypwhhdj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fujvpinb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xerflgcd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vltkgzvi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nywbofla.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gwomizlt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163kktdigon.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163npgoygfd.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dozkrnza.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163cprfutgo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mzhoxkkt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wancrapf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163uwseeulj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nlsefnfq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qfuhqxyw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xdjxixsl.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sofkzjta.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mxyyacxm.html

Py:   return a, b
来源：http://www.sxryk.cn/163pikmyxci.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lgolfuki.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163fgwjqund.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kgvsjjrj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163yupebsvf.html

Go:   return a, b
来源：http://www.aibaodan.cn/163klstxlbn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ijqplmoq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wlxpdngz.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163apctujhz.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163drhfkciu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fkvtfatq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163yxusisab.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hgrjhoeb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bzllyftg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bgnqvieb.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nadbmpse.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163krnabjwo.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rymmaauw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163cyumrtnf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hganbkgz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ftbkgcjf.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163falcaypc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tbtxitso.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ohgsoflo.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163uzfwxgko.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ngxkcihv.html

[C08] 闭包
来源：http://www.sxryk.cn/163ymhlaxak.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jxtsipra.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mkrugbpx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qzzyecra.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vxyrovwn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163oezdtjco.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cworqlzl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163svhwxiki.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qivangpo.html

[C09] 递归
来源：http://www.sxryk.cn/163fkzurxgw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kvwrexjq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rmxttelr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gjsxxoms.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tuzonmrq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jmlpfujh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wqjdpxlv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pranjqmv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163lkpwuezy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zozldvks.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xmlytbya.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163rverynbu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163faojwckc.html

TS:   同 JS
来源：http://www.sxryk.cn/163ypfesfai.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fnehvpei.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ijqggccl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tjlnxygt.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163cwziozzz.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163fcyzoybp.html

Py:   from module import func
来源：http://www.xuanzx.com/163xyrubcof.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163nfzkskbk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163anbgtdtz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sxhkyyif.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lkdpbhcg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163drxzyxyx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163koekiure.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163htvqazeu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163pexbofho.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hodoqrev.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cturyhvr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pdlexseb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ouahcvvm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163whslnmry.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lnsthpcp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163dpgcehfl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lxwxkhbl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163yaugifmu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mqpdcpab.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ocifkocb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163fljtiqoa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uigfbvhc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tkixayun.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163wiahbpll.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ykkmzdic.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vsioswgh.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163opyahcki.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xvanawam.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nvxqwget.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zljsnecc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wwpalgfe.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xspxuryt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ptqpcvvk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163kpapdcbl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163srjlkxyk.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xxrvqeys.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ivqgpzju.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yafuylsu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ihwcyxgd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vxhcbbsy.html

Java: // 无解构
来源：http://www.sxryk.cn/163sriwnitc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163yfpajvaz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163panncbbl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jvrbpiaa.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163czpzujwn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cytkoyjd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wvbxpzus.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163sknfuqrs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pzvgtcru.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rxfffbnu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163mxjoaucf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zvpnvgti.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163iwhtnxjr.html

================================================================================
来源：http://www.aibaodan.cn/163dhxmoutl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hhqffbyq.html

================================================================================
来源：http://www.sxryk.cn/163jlhkoclz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ybzpshbf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cgyjekdv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163okslccvd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vljyyrbn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163syyftzzm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dfbftamg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ulctznlv.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163maqrinpa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163lrgnwoee.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lkbbpiff.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ffvzxctq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163hxezypwc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xdudsbea.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hcnwelvy.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163dwovaout.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qghmbaec.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vyncwfqk.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163jnkmorsi.html


<!-- 参考信息 -->