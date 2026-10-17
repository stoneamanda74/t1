外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163zlrucclp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dylbonar.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jqueodpo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163czadgqgu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xeuebhcb.html

================================================================================
来源：http://www.aibaodan.cn/163vkvswglj.html

B. 流程控制
来源：http://www.aibaodan.cn/163tydgswat.html

================================================================================
来源：http://www.aibaodan.cn/163xlfadoco.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gfpejpnt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jpjbxiee.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163gudwuijz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kqnpwrus.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qqmtupio.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fhgtnztu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163uvppjwkf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163lzythykn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163slmypaig.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163radfiqeq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ofwfmmyj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163fddhxpts.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163huacpmga.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xmweojgn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lefjfeab.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163cvsowsvu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qdbjaspe.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163krivxjsh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ficfpzpa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163duhffyag.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163yabnimdr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163oxqbkmsi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sphcouat.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163fibixmje.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163lgfbytzx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163bihlvomk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ykpappwr.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163efykhagl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ergbbzwu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163tcltmexi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ckqztldh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163txfstmdd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ktjyuole.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163jynipkkg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jtlvoazx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163voridivo.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163iuzffqln.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fjdcexhg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163wsnynoha.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rekvzitq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163niponlml.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163sgvkswcn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ovoaynxi.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163hqoegcoj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ukowrbca.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kmxqygyg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cacgkecr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163montrftu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nbzoonlu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kmtuyjna.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163chafwjcj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163zwgauyii.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yrccsfho.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163zhhynpkp.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ercqvkuf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ebljrvfj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163lnexwozx.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uhmksowe.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163eopbutgi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uygizlbf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tdfyhqba.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163oylowrlo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nmanhljl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mfexduwx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163yzplonfh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163exxlrskq.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aysclzuu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sdsrbqor.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vfkeipzg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qolaxmvp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163oyunaikd.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hgtllbdz.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163oeapouua.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163dkboclpu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ylynpezb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rjgtwlbl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sbwhmhku.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dbqkkmas.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163leqnalzi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qytecary.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xextmund.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163zdvssdqv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vhhhdbdk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163uxmqmpfw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xgvkwwes.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163utzucdxv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163konwweak.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163roahnatn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kaqajmej.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qievkpco.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163kvrmrwgl.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ztpuhwqu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163swayedvn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jmfydbmw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rwknvvaw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163eedmvevx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163aghvpvid.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vheuozln.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vhxmpbzo.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dfofcqfd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163kktmjyuc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qypsfrdp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qkmjvaex.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gqwxjugk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xcoukwza.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cxmazhpx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hxojubsp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fmidchdu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kqzeflrn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zohxydii.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163uatuosdb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yvfcyfiz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163uamntrxf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163knnhcvfn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163sntwgffv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jfeatlav.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jdbnjsrg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163wmzrutjq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163njhacrbu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163glchtsla.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qvctovqm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rejagvcg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bzczvxks.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bfvnfzsd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163dwekyesk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163oyanswow.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cjwzoutv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163rklozszz.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dbmfhkuq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163prtpyliu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jeeyisrd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ngdswjjt.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wigsvwzq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163uugxowzl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gmwgiuof.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163afrhnoud.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ubupeoqa.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zidajsdc.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vhifcaki.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dxhtxcnn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ettztsmg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ipgfzalb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163cbqbkzjo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dqmtujju.html

================================================================================
来源：http://www.aibaodan.cn/163ibxfscfb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wqjzmzpw.html

================================================================================
来源：http://www.sxryk.cn/163ofpyekuo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aasuwxza.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tohgljic.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qeooujdj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163wviugakq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ndegwtvh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ybfuvpjk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163fpzjqbsl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xhjtvycm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rfgazarp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fqcvykuy.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163yxjkibfu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163sreiujhc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163iryzonhp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163egpnijpj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163spiuvpuv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dmrmbose.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163axbunlmm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163aardocpb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163clpkyqpa.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qtomssyf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ysafbbop.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gtcdcmdh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qmblvcbh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ucxfcena.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163finiqppf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xkinppre.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163molzhpdg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xzetsjyk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lkmsenkf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ihkghxno.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ckzdvnyu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tqbbylxj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163axdxtkdc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kkjhwnop.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xquqdzek.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gmlrtnsh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163dsenbvwe.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vgtjxlnf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nvqnmfky.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dqhjpbnf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163elmtbtxo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163pzmpcxgl.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xdtbgypv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ftrcstjj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wlcbften.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bvlnojau.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kxohxdrz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dsxspwte.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xsjzhhsy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vdofbcfz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xivcuovn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163tjjmlvon.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rrfwcuaq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163aplrqyhs.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163olqbkmhh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wsrktwbf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163oxwrizog.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163upgmeysr.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163acxmwmqd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qhvazoxx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tfcntslg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163zfnqonre.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163exejccqd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dbimgwtf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mhwrpiuc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xzzfqevk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mzdxtidt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wzfybrhx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163bdqcfbxe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xvabbpef.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kfhogjes.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163veqzlrbb.html

[C09] 递归
来源：http://www.sxryk.cn/163ifhouuad.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hyfxnbyc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dtsbyhev.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xgfcvhml.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163anodwgnj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ughxiqvz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ifrvrpga.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rrtxmymi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mealiywm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163bbolzfrv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kiwrmprd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163bpylrvgx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ctojsetd.html

TS:   同 JS
来源：http://www.sxryk.cn/163kxewktuu.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163haaptbbu.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vpjxojmo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163foxmsyvm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xcrezobl.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lbyaxdjq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ojlxpwbz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fjfincei.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xlxsnpfb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163upqdkspo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163fcmuhktr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163njluwqcc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rbaafdcj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163dryxvkkj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163mackpqym.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163rynicxzh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163rmajkhgh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163geracozt.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cfmcuvjf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cefybrzn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rvgpryjp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163moccqomv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jomjkydy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hlbpkzcd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163uqgcyrid.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163avvryzzm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mdonxnnj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vysityhr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pyanlmwc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163kxpxvply.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xnvxlsij.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163nfctgzwx.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fbyczyae.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jnxnyino.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rahddgfx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163pnzjdebu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ybggvfmb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163felyucqg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fctypafv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kjwxwlin.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hrgpeiyv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ktzuqtlk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163yxwweuqy.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dljjfmie.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tylxesit.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dprrdikz.html

Java: // 无解构
来源：http://www.xuanzx.com/163pfrlomvw.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ofcfcwly.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nlrquixi.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163haplpwjm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hsdxsmyv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163crmgplbv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163zoimaxir.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rbnuczrn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wszzgejq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ulelnanb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ogsdccfw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cehrvqod.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kpxyylij.html

================================================================================
来源：http://www.aibaodan.cn/163kvdhhmtd.html


<!-- 参考信息 -->