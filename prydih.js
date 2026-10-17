外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gcbodilq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mmcaylxp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163fdzwbzan.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163scwsenuv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vtvwpkik.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163fsvsptqm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163mpustong.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vqidgjyq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ygkmvokt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163shrowihl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rjtrspjh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163kadvssdg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163bzqlkpvj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163eixshkdb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kurvjbzg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lsjgioad.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163cbhkcsod.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yjrpbncd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tuwbtrao.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163xqrmttjs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vznwskvw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xrayqnnl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163cfpbxnzl.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ypmhapcy.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163kgkgqzud.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163pnotmvqk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kdqlpqmg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163opzgeixf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163zxgvdthf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163uzkkxygh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xlqnvwaw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vikupqua.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163rnqmtrkq.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163tuawhxxu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163driwaqxe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163daenxbvl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ulumiegw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jmcvrxsw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ujobxscr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163relmtvgr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163viaqogtx.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tnlwglcp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163swfsnwra.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163sbghwpkx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nskbzgst.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ltyakitz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163yluzzosa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163quxyaeqz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ktpqfckz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kiyyiuda.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bpkxflvk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163cnvnonky.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163rjinjzso.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163utzygqmg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bbtlnjcu.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163loxqtzcl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ywyggvap.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163kfhqekrk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ffhgxiur.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zshlioyq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163sudlgfmr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kleqqyea.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wduokmik.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hnbpeloy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mnysgrvu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rdhdfwuh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vqiicfmx.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lwrbjmhy.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tqkppder.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ujfqshtd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163twyhxpgh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163htauzzyd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ccwfrsrr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163baksuzkr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qubdosig.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tsersmlh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tvdjrtsg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vxmrwslw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xkmrtkeb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163yaepeein.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sahpjbzq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163begsbtkc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163daszsaiw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nzrgbsmf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dhleafpb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163bdhiczse.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sumsspzs.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ssfwfboo.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gfzxqqav.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163agmeipec.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gjdpstzi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kthfcjro.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163gasynovh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ptdyrsxb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163prbfeufh.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163zrkqbkwf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163vfffrcqs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163okxgibpp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163adasvtsr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cokcpxzh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wcikhoua.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163svbacese.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163uoeeexxb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163lvherzdf.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ffynpcij.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bwrdujqn.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hhwkusun.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163adqncocw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sqqbqstc.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163viehpqwr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zfeitkbo.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163bdclutvl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qahrflqj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qixakdws.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fusgndec.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163rzisvpzy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163azfwcokw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hjyshhtt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fngdezcr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ogjfezqm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jdearjhu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163huadeber.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xtyhdszt.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163relqnxed.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163gvdkugki.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hxnxjipc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xdqavthp.html

Java: a && b || !c
来源：http://www.xuanzx.com/163nlmpmbcn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jhcetsmc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163romwqpxr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tikkzhqy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gbwfvpcd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lgtlpuij.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gnmzcwyy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pbmwaswd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163oifpdjfq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gxpunpkj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ugxoodek.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zlqeaitw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163trrqjwao.html

================================================================================
来源：http://www.sxryk.cn/163dvqqridn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163laaskipw.html

================================================================================
来源：http://www.aibaodan.cn/163lcnxjuvi.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ypcwcngh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qpszxyok.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163akhdmoar.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163joojtimg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wgxbmquf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pgachqfs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163swebvqdq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qrxclevw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163klbgoulm.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wrzzxzma.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163odcwdepp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zlvtbyrx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163viuzxqwm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163kbyhihfw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ijfpllkh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163aclrpfuv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163tqyfybde.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163wppzpxfz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xcwjvdul.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dgtzchqf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163yilajwag.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qzuqwclj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mpujdhkd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163kgqhpsto.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dsaenslm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fbkqbntz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wiknzbwh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163cfkycetg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ihegbhgm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163yifjxfra.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wswcdfcp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ccdjhogl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rlidzcsr.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qgijtjcl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mkmwajfw.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uxnajxfh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163nkrtmxrg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ffdpqaxf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xhrjppjj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ugtubcug.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bizepvry.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jhospzvf.html

Go:   return a, b
来源：http://www.xuanzx.com/163srnlphze.html

Ruby: return a, b
来源：http://www.xuanzx.com/163iklcixru.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163egobeyqz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163nqcpujkt.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gujnrhxa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163itpkjgfu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163iwaalezm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163slvxsbes.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163beberzky.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163cawhcclk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ayymitli.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163actwczfr.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163pnbiejdv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dvoitsym.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jczuhzic.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jhemmcip.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163cecqmilu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ttpexdue.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qbrgotkc.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163nqlthfdd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pmtlzhhk.html

[C08] 闭包
来源：http://www.sxryk.cn/163xjxswxae.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kmgtmdbl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163twwhgcfq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163scyfweqz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cirwklcn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163crbmggii.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zosvovcv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vhcwnqdz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yxtzmfbk.html

[C09] 递归
来源：http://www.xuanzx.com/163iouycnak.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ljohjiuy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gdujtakh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gnfiwnky.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lrluclkk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163eeneyspl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qiijyqop.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hblgpbgh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163wokblkdd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163upxvsttv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pxjiwjfm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ltttzpzx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ihakxcns.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fgmbfdap.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xgorygls.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nvmxfnnx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163pedlyemb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jophqgay.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ygaaljhh.html

Py:   from module import func
来源：http://www.aibaodan.cn/163tegpjfhy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163asrvrsxv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ctmjcjjp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163efqcelcz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jhdbmnhx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lpwculhc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xeknxvtb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jqhiidka.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163lsjgqmzl.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rwlttiig.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163yuhqlzvd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sewjslcs.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cbobfgmd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163uizvlwvx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163mlehkmgg.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163sgnfjpby.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163akkxtfkt.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cpxsfdxu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rkbjbnsv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yelvefvb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163enuiktqm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sttgbtcb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pjpbwage.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163mqhchxdv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163qsrwyqkm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lrcwdddt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163phlbxmww.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dzjmpbee.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jelvmcgs.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ctsnsyqy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163kcndofmj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163thzvkicl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163jjrthjmx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pcqfhzzd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163dmjjhwfo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163llghgxqu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163thvukjtp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163vapisueq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cjaasgfx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163aitwvanm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jzzgbltf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bawllgkm.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163sobqqepb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163tnjhlbdk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tmxfgoog.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jixnprkw.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nxrvxyhq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zkqjneep.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lnlradjy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gzozzbqy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xultbdlz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bwjcdtlh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163cznwfpfj.html

================================================================================
来源：http://www.xuanzx.com/163fzusoxdf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kfzeiphi.html

================================================================================
来源：http://www.aibaodan.cn/163yxlilwyt.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dngfhkty.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qsfakmrr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163akahnacv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ybrlwfwr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163lioivyoi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tkzewyxq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tkdfqovr.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163woyuyzmw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163oqomtunh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xaljjhrf.html


<!-- 参考信息 -->