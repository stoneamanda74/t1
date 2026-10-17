外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163eemhrlyy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163roiylbbz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163sawoklni.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ceugeglc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xkljupia.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fbbxznmt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lhtpgdgv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163spajtnin.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fftbrbyk.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163aqlrxzij.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qhprspev.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cjplkexz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xjsaysxp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gdyeosmg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tiveeval.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163sgwpencn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163pclhdjqg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nywnrgjm.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163btcyakec.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163szdhnhkp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bfzbxrug.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zjckjfzz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eivstlnx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nllemcej.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jhmuymzu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163ysojfgun.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wymqvwim.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wteavmjz.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ztexarrz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163sddxybuk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lggyjndq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yiuiejfq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163rhtqyper.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163trhddwuq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wcodhxls.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dohwzfkn.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kisttfuw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163rbjnngam.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lwzokhos.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xbrolvca.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163eggxnwuy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163cdhlvihz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163isyacdhc.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163widjjhzl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zjtgfahd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jcmzlxko.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163azrxunry.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ccjcujyx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uugjswbk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163htzqauon.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163beccnfya.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zbahjiss.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163htqqpzri.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163zdholedh.html

[B07] while 循环
来源：http://www.xuanzx.com/163esgoguja.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pgyonguk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xdofhxto.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163losqfjgc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cjuplzro.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ibragzxx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xnkjruld.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163iujmyofr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163drksdlis.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cwrleyel.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163tnivynjs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163uhdedmen.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cvxveuut.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cbxomwzo.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kfwbyqxe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163pmfobtay.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tsdgnjtm.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mhvcopgd.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163gvejohdk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vfzszwko.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163phrevmet.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nwwxutcp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ouvnmptk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163avocephy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zxuargnx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163wattmqvh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oaknpxec.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dqbovzra.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163giuelngr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hqwxawcz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163uaclhysa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ojwrpgrj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163fdldxzla.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163kifumwza.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hchowvsf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mrqgpiip.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163imvxbcpb.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rozvlhkm.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nurfwnrm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bopjeina.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wyrbwloy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hpbrzwee.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mvqybspc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rbkhvtvx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163frngxcin.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xgavpwff.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dzpscerp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qgzvgptx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qwybbsjm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zsqchyce.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uydvwkxu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163iukcxxqq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zlrkqqct.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wgiycylj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fumaymty.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163gfsxhkkn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kicntsbl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jkohttie.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pywxwsnh.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ryydlngt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jcyqowet.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163fktesckl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rzoxpmci.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lndofawv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163syobbxmc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163vyyjxfum.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zkwsbumc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163guldmfyp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ovsxjdyf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ovvctxjp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ksvnihfy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vjcvplhs.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tobolagh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163gmskveax.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bykborie.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163nebhfjdl.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zkhouukc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cjivwrln.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wiojqazl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cotwyjev.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163evrciczg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hmvgrrdq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163plpbiamx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vhxptprm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ldqvkpjo.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163blxpxwee.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163sunsvubk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jtflvkmp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163iasknqgd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yqtcnmru.html

================================================================================
来源：http://www.sxryk.cn/163qdfubdai.html

C. 函数与作用域
来源：http://www.sxryk.cn/163htxwqyif.html

================================================================================
来源：http://www.xuanzx.com/163kmwovzdh.html

[C01] 定义函数
来源：http://www.sxryk.cn/163egnvdaor.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wudssbgz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163goutzbtl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163sedlyubm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cqowantp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bqzqbpxz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163qgfbeyup.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163jfkkegpv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mqtwtthq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163flhiwbwt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163btdjitil.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bjjpoaiy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163abxjjfly.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jjdpriny.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163iqdzkqdk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ubevbdwn.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163srzweump.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nmgenwjq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163rrcmsaxf.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mtiarpcm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163pliijojp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cdlwajsj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zqtfudqs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jxcexlhf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163sisidzzu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tbmzbdwt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163lazbzdnv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ujpdpdkd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163lfkuqmju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163bqtorvyf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163bbbvyzlx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pujlwgsv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163czvjwyls.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163aooqodpx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kpnfnrpb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dgmejehr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163snzqhntl.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dsvsysac.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vrzpooiw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163djurvzkg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cpkojbdi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rdliciix.html

Go:   return a, b
来源：http://www.aibaodan.cn/163icmyvhvi.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xuyixcpi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163yijnqtgq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163agitaezl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fqqghifb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ehhcyjcn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163aineokbx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163hdxgktvh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163skiehljg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zkmowhns.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163gthaznrn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xbpshozt.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163fideazbv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163hcwkvpvp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163sucsajyb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bfnfrwqh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ksusmpav.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163bhuiwtnh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wtphrygf.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iuojxfqt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163yxetzbhy.html

[C08] 闭包
来源：http://www.sxryk.cn/163fsaaxhfg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jeprbvwg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fpvpklpx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dcwnawsp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dsjpickj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mnraqunj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gawbryty.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163njpambmq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wilicucy.html

[C09] 递归
来源：http://www.sxryk.cn/163tedvudtb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bznrduvn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163iifiephk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dcktkkai.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mtznnpbh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xjaiaezw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163eqfkicwx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xtyvmjfs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pdxjwvkk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163eiztiqzp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hasblfdl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pclnltws.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163umvsdkwb.html

TS:   同 JS
来源：http://www.sxryk.cn/163tldroltz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wykecufc.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163yslepqwq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cxqobqvf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kzzmuvkx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sgfmapap.html

Py:   from module import func
来源：http://www.xuanzx.com/163wixjules.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xqqoxlea.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wusmpudh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163csjaoygf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163trzkrmhy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163joldwero.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jxwysjns.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163yocbdorz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ptcfrbqr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vecratqu.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163vikjmxwl.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ngwzlvvf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wjdfxpyi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163grcbcmep.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fzwwxwkl.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gwbqpwrc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163pbyivjac.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163poprnnml.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ueusunvp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vtcrggfy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xkwmwavd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ecpqyzrb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vbuoyodw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163clrkbigl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ggnsazso.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dinnmghu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wynpjeva.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rfmrrbee.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163lpaqfwqd.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163lvlktdjf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163eneknkil.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cqgrnenu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pfbomwwb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jegocssg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163evxvcgzz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163muncfrze.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zcvdaslb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hkamqdro.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mkkscpmy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163xxrnvbyi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163tribjrna.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zqrqxdbx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kbwhnjcm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qnxvirqy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163zuqsajaa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163bpbwuqui.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bwojcdnc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bxdspaeh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163sqlxrilx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bhmluqpm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163esgreura.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163rtzhgyny.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163svnfconb.html

================================================================================
来源：http://www.sxryk.cn/163xmsxumft.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wjkrxmvu.html

================================================================================
来源：http://www.xuanzx.com/163thjuwzot.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163jmyloldh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163xkeuuvgy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163mtqsnumr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163uwymnmzp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mbtrczoj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163yrpceaqo.html


<!-- 参考信息 -->