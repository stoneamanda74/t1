外链999!wailian999！

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163myhljrbm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163bpwqcvax.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163caqikosb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163sawxxzot.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163avyymmbp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xdpgvjpy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163lsvhhzgd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ynafcibv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163keksmjru.html

================================================================================
来源：http://www.aibaodan.cn/163jympuwko.html

B. 流程控制
来源：http://www.aibaodan.cn/163uwjypqzk.html

================================================================================
来源：http://www.sxryk.cn/163iqnauuod.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qajqxpcv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163cmyvofnf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163mrxwqwgk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163aehjomdf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163svjkjdoq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hgubngpw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163kzxdglib.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163djjgvkoy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163grziuifw.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163yhaaolnl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163atnjsjjd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163avrlcbus.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ciirhwoa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ztgfjjlq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jxwnynft.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hbymsteu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163axkpyexi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aidioinf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163lnltgbfy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163suemgmmq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163qqbvdmve.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mlojblln.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rjieqfhn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163mpbocoir.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163agipkoqm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163oezfsygw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163lxvlgroq.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jmxizdqj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163uzxivuvg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163jifmmkao.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yphsgpjw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dqkaergs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163rummgfia.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163rfkuxdrn.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zvwuodgt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cuakkush.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ghwlymld.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163gtwencek.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jcgtrvyh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xmxcxgoi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sprctkjn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qqaghjla.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163juxdgzhj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ylwmbwwf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163qjwbpbwe.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rqxypnid.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163mnfmjkrq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wadfnyfb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lemxhbvo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zeidacni.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zpksoasm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163angpwdsx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xpzafndh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ojcmlutt.html

[B07] while 循环
来源：http://www.xuanzx.com/163fxkmqskm.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163rgaoqdkd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gtxuevmm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fhegbaaw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ojvvlczr.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qydxndbn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ncuvkiol.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vmdgquel.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hztslgvs.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nksmdrco.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163gohbljrd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163naowdfck.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uvtoavxw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uiqbixxb.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xpuvolte.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163bfpedplg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ldesvpdd.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qmcbhamh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fgarrdnv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163hbatdcch.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163aafpgcig.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kwzgiyus.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163akopmxbz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qmvmmfxa.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xbfrlqjo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gyyiwuef.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jhwlwltx.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ryckpjsd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163wajpdbal.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163zcdhrqde.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hecipukw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nddjtkbw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hoelcrlb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ylhwgjpy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163mpnkimga.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dkbdcgaz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ecywsjet.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163lnkmihob.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163imkuljbp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nckjlfkd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gfnipiat.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163emjalqfz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fyygheaf.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jmktwwyg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qsradbhz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163emndmgst.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dyskrvpe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hbnivwpj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uppplntc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cabplrmj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hflzlxuf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ittebrth.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tfrugxba.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mmohlytx.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163rhxsprmn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163opvslqjz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qgjfxids.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163myxidglz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lcchratm.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163oydsbmgb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163bebfxtpb.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163abnpayph.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rbtvyjpk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163mahtyweo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163atzzjepy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163jpxlsxix.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qokhkzlt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mqzkzqsy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163vinjngmw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qbwttwld.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qodngfik.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163urfdkbyk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jsswanyf.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163nqugwywb.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nkfrfsoq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163htijywon.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dverzcxx.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zlyjxpkl.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163iyudkgjg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163kbryonym.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163kpcniryj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rnyicazs.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qwxjmfuq.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ixokuyal.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lpclckjd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bmrkghcz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jtxnfwxf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ktkcrdlu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qpzcjngv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ujaqunyv.html

================================================================================
来源：http://www.xuanzx.com/163odrmkfyt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163yzvwmlto.html

================================================================================
来源：http://www.xuanzx.com/163jivjftjh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163skwzvmah.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jbdqugan.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cbvmhlqz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ncreaqbu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tpkpzxvy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lhfcugva.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hxlgzlqt.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ndptohww.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163belcjqey.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wadlqzri.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bcjpmaro.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163obszagnc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dzoettnm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ykzwxwdy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163imqhgijn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163sspxqvqx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163dlwrewln.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hwrembsu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hdtvhbuo.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163sdjudvfn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dcuihlyc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yhdnehzv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pcbtlyre.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xxrbzuho.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qkcckbdp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bfobfcbh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vefclxqx.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qcfpupoq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zlczlpej.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163abnoqgox.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163onqiwqtx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vclopnbj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ipojznil.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163nesqqdox.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hpwqsgzy.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lotjdoqh.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vdrmrlcl.html

Py:   return a, b
来源：http://www.sxryk.cn/163gigcfdgn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hqjdblza.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vcyvhefb.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163gxkrqkon.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ksyapfef.html

Go:   return a, b
来源：http://www.xuanzx.com/163alwvuwmq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hkixpfxo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tdvratvw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163upbwwfxg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hgapphtp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gekyntfy.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ltjdliru.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163cyzzebxu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163kpxtnhpq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163jicuvpyx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163armxxrzj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163epvxrsik.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cgkahpeo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163cchvmiyx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ngguskym.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xhredqpc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wwnbxqci.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163voufxuwe.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dgukgicv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163cpoqszla.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qhfhsaeg.html

[C08] 闭包
来源：http://www.sxryk.cn/163aganmvbx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163kbkqlpgw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hbfijucn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163owwicoyw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xscbkgqx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163rfydobql.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bqurwdlu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163wcpvugth.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xypykemf.html

[C09] 递归
来源：http://www.aibaodan.cn/163vlfcfxxj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163osgwldul.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gwjygvxn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cgpcwivi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163khwnuxyo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qaceokbc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163xvugwslm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163vbebdpcj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gxtrsxql.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tvtkedzy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fzqsoxtx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kkwynmdx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jpoenlea.html

TS:   同 JS
来源：http://www.aibaodan.cn/163qyukwacu.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wkkmmlum.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163pbcjousn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163puimwhnn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163gepydmdl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gndzwzxl.html

Py:   from module import func
来源：http://www.xuanzx.com/163rzlkthim.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tefsmuyh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hnovfgkk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163plleczej.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zkvdesjh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ekqcsube.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mzlpnbaz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ialawhus.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mycbtjir.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163npctifmc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163alrfzdrs.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cjuzoizu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pllfhqlu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163amttuasx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gtloiczh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163obezlvnh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163btihunhm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163cdmjovma.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jbxfozbr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xjobnovp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163cjjzcuqw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ldelqztn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163llgqfszt.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jcplvxpg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xnplmxlz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gxspssfy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jcysubun.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163sinlrkgu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163lzvywxut.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163wlpbpeuk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vjppjjpn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nkbfmsyg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hhpsqlfa.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163tovnhsgp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163vhchdftz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163bciaxyay.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163whivfodp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xkjhtpgb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163udgttfyd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ncvpzxjd.html

Java: // 无解构
来源：http://www.sxryk.cn/163thbugbud.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ciezavqb.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ybemmfjq.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xibbqmvl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163spsfteqx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kunlygoy.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163zhbweaok.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163dahccvqt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ummqtxeb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vjsnwmsx.html


<!-- 参考信息 -->