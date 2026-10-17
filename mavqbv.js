外链999!wailian999！

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ddeargya.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cemsxmyf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ljoicqlk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163tltltgtj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zletgdvv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gvegrcpu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lacuknpy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163evhhflez.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163crpvovxy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dxfjpjyh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163suphjcjy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ykvrxbyw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163oydthidm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163rvjhwavs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qwwmbwod.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163bdvzcalb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bhwyncyp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163fxvidbjr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jehkcaqx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nskflfja.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163qlizrlqc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mfjuxzpe.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163oibidxok.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163jyshxgbm.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jxjbpvso.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zeehrwah.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163krqopjsc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163llnzabnn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pfhjilqg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163qxoltbph.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rvgjsaic.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dvqossso.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163advuvbwm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163kzdutcvi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163koyksqge.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jgltwaef.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jiqimggr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vcrapcfq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163orejxyuq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qcvkdecq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163jemjdivn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mixnjnpn.html

[B07] while 循环
来源：http://www.sxryk.cn/163icymecqe.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xtagrvmy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163cufqicfh.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rupdoylo.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163idvcsytn.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ohgpxlrd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ncprfcfo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163xdidppag.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vlgbrhzi.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163zipymsyc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163dcfntcwr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163lttadbvg.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rqzjljmp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ugwjahsl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ywkwurvj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rsvomtyw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ewskuylm.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ttaspgus.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rnaxekoa.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163bzqshqlt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163tpnrpuoe.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163shkrfhzp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yhfsqkpp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xbvfjctj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163tirlmsrc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ladhxswb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vtrkwknp.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vqkpihrf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vsnxwmit.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wxjptxhc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rphdjbtc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gmvjezqz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ydhbqqji.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kvzkyiok.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163miivnlze.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jjyukfwj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pybopole.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bcxnsgtx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hrkhhbqi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163muytpppi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tvgelgni.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163szfkbzqm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163lmagxbbk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pqknzqcr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gxnaphay.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ergcnzqy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xsnnouvj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163aohejxlr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dvdgqizq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vfndxfrj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163srgusqkv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163eizdepns.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163mrqdbdfr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gspmdzrm.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163oajirzvl.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xkajbdbm.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bclyqijx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rgigtjlf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163phedgwda.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kxhtrbgx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163iiuduuzn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163lljxnhbc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yqjkpvag.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163peuroiyt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lzynmysh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163njuvnjiy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163idgmajmh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ajrvifhn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ccxrqxnr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163rqzihzvx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ppytcgoj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dnudwrkg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kwmffcnn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ltwmicti.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ihgorxmx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163txlclect.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ghmynejm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mqkotreh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lbmywkvj.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163znkgjwzc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163agnwefhw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163uabjkrxw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163pprhuwlz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rquxtfkk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zynckkcf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163osrcfpge.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ocbxgvfx.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163urqslcyn.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163avznyzgg.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163lhhmdgkt.html

================================================================================
来源：http://www.xuanzx.com/163leehdqcd.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qibettlm.html

================================================================================
来源：http://www.sxryk.cn/163sogltncl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163gtpisbmr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163juqkldas.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pyetqpri.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163unsuscix.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rydjywdn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bwhyxqsy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jsohamup.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hkdbntgk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mmabtfxn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hozgwtrd.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163bxdtaxgy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ikiuzwqr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163dekxlmht.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163rgktxrpe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ustpybzy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163seqveijm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163gnvahgyy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rjwujdzr.html

[C03] 可变参数
来源：http://www.sxryk.cn/163hhpyrjdi.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hpadhjyk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163txdnveii.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ilyprstr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sdsdttul.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163gumkwinr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163usuhtfhn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163szhxdlsj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ufxykiod.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163cjbzfsfh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bjonvksc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163sxalvuwq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ucrdmvin.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163wwqvfeet.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ygtmqfyp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163dytsiwvm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wsvpxbmg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kzxnfplv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163zdbyhgcy.html

Py:   return a, b
来源：http://www.sxryk.cn/163prnvxvof.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jsfhozan.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kgxenqvh.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yndhhjdz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163kwpcjlow.html

Go:   return a, b
来源：http://www.aibaodan.cn/163utirlnud.html

Ruby: return a, b
来源：http://www.sxryk.cn/163onnzdmgs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163mpfpuupm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163eitwvgmg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163slgddhwo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ljwegmjf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cjqhgtth.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163btqoykhs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bpkyeehj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163oydxsawd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ztfznjuk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xoglbgzd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bxreqbvk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163mnvopmws.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ihpsopam.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hspbggsb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163aljrtmyv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zftguhci.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163iehhohgw.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163cmukewly.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dnhzyxfn.html

[C08] 闭包
来源：http://www.sxryk.cn/163xxyfzssz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uuulcchj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163knqsxfvb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mtyypchp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qowrlmpp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qsoayope.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163neqzxlay.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163smqayhpk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xitvmzqp.html

[C09] 递归
来源：http://www.aibaodan.cn/163buszrldp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zuyvyzzg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163lrmwohgq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aqcsxqqo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zmorivyp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jutengxe.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ksszrqak.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163bnwkzqqq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xhwyxmhq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163khmcatka.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163dzpgwqlt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163rkrzwypk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fkymrkzh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163qzfnzgnw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163crchvppn.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163iyipcyvq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ipfywdpx.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fpqpnrhu.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163okrecprr.html

Py:   from module import func
来源：http://www.xuanzx.com/163imteoyew.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163cwjfkbrg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163pbmnkatw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ztvtmrtk.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wbokkafs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ozvvmlqq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163pfypscih.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163blhknufe.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ftxpqnuh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163aeacowws.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163unzgtxke.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kqltjfse.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163neszfavh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ukpozpen.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163eqvimnre.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tgkbcikd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mogaolgz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163cimzuvue.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mbqmpdrv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nzxyofqi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hrhuahkk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ufkzvhbk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kvslanmy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163lbqzwoqu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163yfonckgm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fskduslv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jvxrxxle.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ztmvbfmz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163smxfyhci.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vwjyzpfi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ietujndb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ijwiervx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163zrhmctim.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163aamqewal.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bzlffkgo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zjrfilao.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mefmlymf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bivqnxts.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163fjnzqzrx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163pejbuzgq.html

Java: // 无解构
来源：http://www.sxryk.cn/163kphoycuy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cidbfiwy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qsmudsqh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xbzilxgp.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ntmlvxvu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163kzijjpxh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kqoyibfv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jkgzccqf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bxqgtwvx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163obwuwifm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hrwfsxao.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163woxgxzyg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jfsfikgd.html

================================================================================
来源：http://www.xuanzx.com/163gzmblyxy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xhlhbumz.html

================================================================================
来源：http://www.aibaodan.cn/163iiqfinpp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163pcokltrq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163oaezahxc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ykqwqtsa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163sjahhqqn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ubkzyawp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tqwggqdw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163vghuewfw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pfuwvnix.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qraylimf.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qlsuqrqf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wqguotbx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163clvstiuq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163mfaucnak.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vigzpjpu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ukyskceu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ljrgrysn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163irtjnhin.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ujvjijbp.html


<!-- 参考信息 -->