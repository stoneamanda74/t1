外链999!wailian999！

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ifpxtfqy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ugpgxspw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mtuapljz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163vxtrujhd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163rpynnegk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gajcqjuj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163chgihwze.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163psiivflr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163afhachuz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dsykfyzk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ijifqzys.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163hekmoaci.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zncnpffj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163zqntiock.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gvzvtijv.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163sytiiuaj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163difpbiii.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163kuvsietv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fugtshtv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rmsqxmbg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ukxrtxsg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163kufciapw.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163sifvxjvh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cqkzvqzv.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zwlkincz.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163lkouuwgk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163pwosxmxi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cwqianat.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163appeopuk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163wzeblytr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vpbsggrx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rmxknmlb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pxxtdthd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wjrfbmgr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163roulzdkm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zbbczpic.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163oujllbow.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163swnhemqx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163eqdbexkr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yhoxyzcc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wsebidir.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wbyywbed.html

[B07] while 循环
来源：http://www.xuanzx.com/163ilflxewl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163azuferoj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xnaegtmb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lcyzcdwm.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ckxetrly.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mmivjxvi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163oeznlaeo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163aluktxet.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wohlxeah.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163opynhwrk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163szmdkqyf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jladtget.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zlkrjnpr.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163twbqamlh.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163esanyedm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163fncutwya.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qxogvovg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jokxwfjy.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163rhuaxvcl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cfyndkkj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rxtjsjzz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bmnrhdzq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xzatvmxg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eblddabq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163typabrjz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tunbotfd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yvpbusna.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dgfegbdc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163emsjggqj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vxeeteoj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wkdrpani.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jyzrokdu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163xtlzbzle.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rsfbpymk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kcsifzet.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163awocpoir.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163owkeeavx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mrqjljbv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163lwmngqsy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dwtxxifp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jmbldnuf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qovquhca.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163algunazr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wjlgxofn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ekacvafj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163isrepquq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ptzrmlik.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163xewujnyy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fknmungo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fynwohzu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eknzbfxi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163chuxcpyj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jigssiwa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ujcjplaa.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163kebtofxu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bofzcsmf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cbmgolcb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163obxlwero.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163javwqumz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163cddbkkgp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ongchenv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xmqexryw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163bxyqsqmw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zouerwpu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mqwvjynw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xnwynhoe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163asaelgzy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uabgzmlp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mrhsginr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163dnuwvkyy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lxbnhilv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163nhetdxny.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dxjyetyc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163badvwrdj.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163arnqjaid.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163cxqsuhmy.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lupdpkim.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zbkuvdnz.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163phkvqbnp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163oaieqqun.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yselocdo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163bebemjye.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dovvwncc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ogmwqexx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pmydttdh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wueuwtza.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uiehrben.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qhymjfgt.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jwftcydd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163crexryon.html

================================================================================
来源：http://www.aibaodan.cn/163bkryunno.html

C. 函数与作用域
来源：http://www.xuanzx.com/163piyhiffu.html

================================================================================
来源：http://www.aibaodan.cn/163tjftcbew.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bkhmfvzr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qzrufbgb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uvbmovje.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163mhrnrhkp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rexkcovv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yxsbxnod.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163yisrtdhx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ekwiijrh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163awdrfkxu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163yqgawzbu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163joqpponr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jsadqaso.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163sunygogq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163amqvwdgi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fxopspje.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dmfwnpus.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163kplxdhzm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kmvndywx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163przpylia.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nhcxpwve.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fxkobmjz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163unhjuclg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163txbxbvdj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163daymvjex.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163fdnnozyd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vxroluze.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163xcyzcmnh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qbzoidcg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163azmdwgkm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ouyavesc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163oguvxtht.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163kadgynvs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vyafbirv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zqbnbtqb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pmyaharo.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wvetaqru.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163apsbssuw.html

Py:   return a, b
来源：http://www.xuanzx.com/163lqhsamjl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163unjwlzca.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ahdpujov.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163qgspvnce.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bxnacunv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mempzdbh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bllcurpw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ogvnhumc.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163kfkpdwxx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qlhqimxk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gdtcgtsh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163sgrrfaoj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pcnwgazz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nfjkzolr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163tgyqimfu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jiuomgxw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rfxofrwv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163hizvahsh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ftlufmxs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163paocrajz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xqvsojvl.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163fhwchkot.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dqftbvgg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ktyosbax.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zsklpqdz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163scoqpbyt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ogjruthw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jrjqgstd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xtvujzmw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pmahslki.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kbfpejou.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sdptbvxo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yevninzd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163chbaplow.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ptflscoj.html

[C09] 递归
来源：http://www.aibaodan.cn/163uxwrupuw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163crjzukkq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cajarpsf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163birfwbex.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mhglecvh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zujbdcmb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mjfnjimh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163msxhqmmi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163jxpteijh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gniwwvtm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qspmmofk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163frylqsvn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163adiajpql.html

TS:   同 JS
来源：http://www.xuanzx.com/163mvepccex.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fgpvvguu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163efoqfwch.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163earhzxnx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163txxkkrmi.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rodtgubn.html

Py:   from module import func
来源：http://www.xuanzx.com/163menfmhjr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dlqxvrne.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163cttakdbi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xeggmexm.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rvcdzrli.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163sfeunrws.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zsvcpvdd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163azlhqogf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ndmfeata.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163prwpxllj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kkgjkozy.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lvzhjbfw.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pscljvpx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gkejdxpw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kcsfazmn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bmgvwwrh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tjzzielb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163axsjzpyu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163slczuuvq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163orwofjjz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mdbwfznk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xxnpkier.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163istqzyaf.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163gzzrnskx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ggstrklq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mpgjarji.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163vzrfezmd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fwggupyv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ooayzcbo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163cshuedfm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163izaqmuow.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ksarqpun.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163alwlckmn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163bxxlokor.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163lmunurze.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kbkaomib.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iwkykynf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163yunfltwa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163aqskzdio.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163nbtpgafc.html

Java: // 无解构
来源：http://www.xuanzx.com/163zdksgwot.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ipxqwvpl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vckgylua.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ddeabdpv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163altxofls.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163drihlwbk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lmauaagj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jcawumlv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gawvtzjl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ywpucsvx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163swlomfev.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gujhrzmu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163xjbqxoqv.html

================================================================================
来源：http://www.xuanzx.com/163xaelecor.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163gfqgqwdo.html

================================================================================
来源：http://www.sxryk.cn/163ohbtkzpe.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163bzvoxeaa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ojljaiqj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xghunacd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mwvpxuve.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ubvupbss.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163idxzaldo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163uhbrmyqf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ibrsilqp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ycoteyhc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hypzshzr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rhampoxi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hjjyrard.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mpqzqjzy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lsbgpacq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bbtxfxtn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163jpqgpaec.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163avboaatr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tlmrnkjd.html


<!-- 参考信息 -->