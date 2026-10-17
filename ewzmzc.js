外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ezvaxcjg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vfegaifv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kbsaxeud.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163zlmooyze.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ukowqnfm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163tjtrnsqy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jdbhddku.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ygiyhdac.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rusujukp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163wefckhvr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jpemnuuu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qaqerdvn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163reenjywz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163znifnvtl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163gxpwxhgy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163mkusxxgf.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rjzspixg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163uogujxxz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bmxmwwry.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163svcvhcvr.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163jufpqjzg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zrbchytg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163oetejcgj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163wbhxprsa.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ggyzdghn.html

================================================================================
来源：http://www.aibaodan.cn/163ckssoppf.html

B. 流程控制
来源：http://www.sxryk.cn/163surnotjq.html

================================================================================
来源：http://www.aibaodan.cn/163xkuqjzsu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ecttioez.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dddeygld.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163izciblhg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rtdsqxgc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kfogkwtj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163upbocpii.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163luuxyprs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jtpznmff.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fokttkon.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ktsbijyb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vwyzgruy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163gubyjstk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qlmacfhk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ngyqsdde.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gsvzavig.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wmwnmdwp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ogbuznyf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zwldvdld.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163khczkhcg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ulrvodun.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163cjkbzrdv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fyjkhgoy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cdoqkhax.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zyxhwjte.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163cjtgnqwt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xblhozil.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163rcatixrf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163opwffdwg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163hwyodnuh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bdzgxgje.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xuwpacyv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163swmnkttj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ywyhgvaf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163yhqygyiw.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163aunmmqup.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163jemwglra.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163sdnoakrq.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hdysetwx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jtjtcnqo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rkyjtxyj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nvoopjeu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163acvqpywm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fhihybkh.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163fqtlyjqt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163eryqhnwn.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163aryfvulv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163kbzdbqsw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163pgolwdql.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jjnrazid.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mvzgnyzx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163sdquexbo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163inmdwrhn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163mgpnhblz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163etqecdwt.html

[B07] while 循环
来源：http://www.xuanzx.com/163qhqboykq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163kjrkfxdn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163qvfncybu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163barcixiq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wiywssfy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aokjjhpq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rzdxkvlp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lmhejtlw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lbplnshr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163jrghyzil.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lwsqwkfv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ofcjrejb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bnrvnyag.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qmslerzr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ixbeqmic.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163uskbrlaq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163efwzlirk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mosyaktl.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163youtoxdd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163qkwofmwg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ciojzemb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163njjebfww.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dmrpytsv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rumkbvvf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ybbftaaz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jsvpaief.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fupycyje.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163nfoxtyzn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163twxhgqbe.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163jyiklvzz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xxnybjlx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dzydnvhz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nrazucnv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qwxlljtn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163phodslhy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163srnwwzyw.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ozvdhael.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163htcqjluf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163equzugho.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mpoueyog.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tgpaqxcq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wczrykuw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163tlgtmgxp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wewuuhky.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163mffhrppy.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163biutmeon.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qjiwkzfh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163siouixzi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163renzbbtm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pzngcezg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xynldvpc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vdmcfscs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163cqteadna.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163kaakbzyu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163sqvtapir.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gmutwrim.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vbhloake.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163aocioqpa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wpssaqop.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163eajawjpj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163sfctkmao.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xtmgcuep.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163mqlsnaqk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163siwlzqar.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ymsrwdwz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163evruayrn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163awmvobhn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163abldbdtc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lzhscfzd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vmosxmcs.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qyrmzaxu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pyowyqwg.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ekjnlxxm.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qyflwzpr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163aamxpfck.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163uufvufyq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163unxjvhcr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xyzzxear.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qrylgknz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jkmbzdja.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163tyronpqf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sahufotg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163yrtuixul.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wkjazeop.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bvalttbt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163iftdtdus.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163dypiknyk.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163utaeuzuw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bctvbfit.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nrlymzcq.html

================================================================================
来源：http://www.sxryk.cn/163mtlqaaih.html

C. 函数与作用域
来源：http://www.sxryk.cn/163axklbfah.html

================================================================================
来源：http://www.sxryk.cn/163hjhyvegq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163cocgqjme.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163yzgiilvx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jytgdywe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hosuhfkm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163obubgsim.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jtukhibd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fqdxuiwp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vrhjhovb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lvxibnaf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163inypvxhg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hlhhatpi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qyecavyv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163saubmebb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ugppqlea.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xnvuezrj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ptjidbiz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rdkmenrk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163saivbncw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163magobxft.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jzgmigkn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163sfnaopmc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hhczvzyx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hzpkxvjv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163fshlvpkj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cggbllnw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163jlgerzux.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163olsmgtxn.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qmpqirwd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163iqilkvcb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ccqnydht.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zfdorgvc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fzjahjgx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163sacegabd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163blykavni.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vlqkxlgu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163avcntriy.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163bgkzduyp.html

Py:   return a, b
来源：http://www.xuanzx.com/163nnxjhhzd.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wvljjrcs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zhmofnlj.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bloglucc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163emjmrrdu.html

Go:   return a, b
来源：http://www.xuanzx.com/163niaefszv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163eiukskco.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kgejxvrc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wzxvqgew.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163setnijdu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163sgxrmrjf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163zbzmnint.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xtoiosll.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pzilzwms.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163hlwspgwe.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ctfzlfhz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163byrumkgs.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qcnleyvd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kdhpcjrw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ihnlnnxc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ljsnzrox.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163moudelqh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tvdrnzfp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qqdjrqrx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wrokylgr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mexunwry.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lfmvaskq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163yqvfjnmc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jdskydme.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dhunagzj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nerhhcxe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zyeossbm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zdtlfwjq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ufxmvnur.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163avolatys.html

[C09] 递归
来源：http://www.sxryk.cn/163ccbxietk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cvnuucis.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163afzkiwho.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fkhevbcu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ntwdujmf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mmfuhulk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163uhflvwhs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163blzmnyak.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ymbaicxc.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zlnijcpj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rwoviueb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163wgfperdy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qwxjgabr.html

TS:   同 JS
来源：http://www.xuanzx.com/163xmhapccn.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ddnnfebv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nvrjufzj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ehddufrm.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dkrshcax.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nypfnyip.html

Py:   from module import func
来源：http://www.sxryk.cn/163kkjrxevt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163digwxrgm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wadeffej.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163aaiftzvy.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163znrujtwk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163fpccplpy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163inulmnlr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yjzwxmjb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zztlzgfi.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163bygsfijb.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bdravkrq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ocshankw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mumistkm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ojaafzvw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wsqybgbt.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zfpzfaan.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tzlbvvqi.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163yhkrzdoj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163wryqpypp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ukmobskh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163aiphstir.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qufigiwa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cfinfkfj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hcislcep.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jahjnbtd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pzzuxlpm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lpyyliwr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163wduwifbt.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ligexwhc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rruopnhn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gxmstrpb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dkcqahjq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163nrnuykgu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163yzmzigkz.html


<!-- 参考信息 -->