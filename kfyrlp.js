外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163owcoedux.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zfsnswew.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163maqejgab.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163zxvzjaiy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163nvgcztik.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163yqivcqud.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jkfrltad.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163btaojysb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163pcfmwarb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rmvuikns.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163fhlkwyji.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163uezgxbkm.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163cnoopdzf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163tqwavukq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ykmktjzx.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ntcvhsyi.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kmspkyob.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163qqsfsmff.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163yxkqtelw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yngfpzdr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163uftbxkot.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163rwtxibnh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163rrmpyhxw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163prtnszzf.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zqxiaogv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163jgzkmscx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ophhmvls.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163zyjbofsy.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163goxirbuj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qhelobkb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ulfxfwfe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ssgufwdw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163payfdpkf.html

================================================================================
来源：http://www.xuanzx.com/163gayftewa.html

B. 流程控制
来源：http://www.aibaodan.cn/163ksmdeqqg.html

================================================================================
来源：http://www.xuanzx.com/163jzcjquja.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163aadznaax.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ucdzsmrf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163swlvqrga.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163furecjsu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pdqlvsoy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oqfdxsue.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163nixpjerb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163zwfaaezf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jiwqdxlk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vxcsfgbq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163yrifxubk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163vmwcatvj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dcozedrk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ouvtokht.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163svhjfezp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163eqdiuleq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163jnndepin.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163brpxioxf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dqoxflyf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163sxrjaspf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163hmbyvtcl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zoqzdrxb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zngqmfyf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163mtursyti.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163prgwiudj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ovduoxbi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163qtgvgpsf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ykclysrt.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pookxsrl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163risyddyj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bskigyaz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xedjdqvl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tligxufv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ytihzklq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163srpggxhd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163gcsxcrin.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jspzdxpy.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fuadeoxr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gssbceyo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xcdjdngl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vtyawuit.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ktivqgnm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qogvqrmi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vpmihium.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163yeyhdovb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163xxspioju.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163mreyyfkw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163snzwpbos.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ctwddqqx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bsfixpla.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ahegyzyd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ntghieiz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pxgpcpzm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nlqqqwxe.html

[B07] while 循环
来源：http://www.xuanzx.com/163mykkxhwj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163doizwbaq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zkbqxoqk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fatlafmj.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kdcmtmfw.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163natdgkbr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163adywjzre.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163aactukos.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zzmucaqv.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163bewswxql.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163tnlcwndf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163stlkcemv.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fncwlriy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163faarqisl.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163suilyyur.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163itlxlgnn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ipnuhmei.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bgdkziwg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163sgyaqwgw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ogvmmmyy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ycfvipnl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ecvsmrps.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gmfhwbha.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tuirkkgm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qzxqxgcg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hzrsbugu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lklyfboo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ftqaygxr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kottepfu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163yxlvssut.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163eyxudwcs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jimgcnqd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gwrxrtoy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dchlupns.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163aasggajt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qijzyejv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xlnmturj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mvjrdiis.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163snrxtqmy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wyfjboqf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yphsjlpp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163iycigvin.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163koqyxgij.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163itrbukjg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163derftmjp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fuctwrhu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cmaewpyq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163owotuhms.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163teacjnsr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jtlooimf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ciorbjdu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ojwddmtq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ukasizze.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gwczpbzi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163erpsvjpj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163cklefsaa.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xcioifru.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163egriimrk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eolaixtb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163apscnufd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dsclpdqh.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bmufabqg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ypmqimnx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163crirphun.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163fnmderwa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163yipyzxzb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mowdlkee.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nnvfdjaa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163iphpisqz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163alskozdn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ioyffbfo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ogevtliw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qlviwrjh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qvsdfwyq.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ahijoshn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xtqdqqre.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pjqzufmp.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xhmtccin.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dhjlfjqc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dqxoeoed.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163lmhdmyiy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rzhwvbkc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163pboescwe.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ufhauoix.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ismckera.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bhcewttj.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qlbhfvzf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163chspfghk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bkxzxmxd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163dkgfhgyc.html

================================================================================
来源：http://www.sxryk.cn/163vhajstob.html

C. 函数与作用域
来源：http://www.xuanzx.com/163llrqlwyu.html

================================================================================
来源：http://www.aibaodan.cn/163gxaqmvxw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jaxtxsaa.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163klkwkkyu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163owswzkmf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ustsxnti.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xadtfmuu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jwjsjpww.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mwqsrezm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163oqxwmkva.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163argtadgc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163zbraxsun.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jyykstno.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163psccqmcg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163fkwqfbdf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163utwsbbzz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hwbggdvz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163yhezaiwi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ufyqhjgt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qrgnhjed.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ermlifsf.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mnwtupim.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163sbdujtue.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bciaodwj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nmhmchih.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wglqxugs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dhvyxsck.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163miqjvsqm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vknctrri.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jjvwoidy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fielfdir.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kotccbnf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hpeqsopf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nfgdaqwo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vwsvfpvt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ynotwbym.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zkqmlfhl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bbzyekoy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163awwwmska.html

Py:   return a, b
来源：http://www.xuanzx.com/163zuuaqzmn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163rdxwfkvl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lzawikdh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mxfzucpr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163nhckvltk.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mxodgbgs.html

Ruby: return a, b
来源：http://www.xuanzx.com/163knsypoty.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ksfxuzqn.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163yetsujsn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kskesyss.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xxkvpmhx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mhsqvznp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163nwuydcpo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163dkjkjkjp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163fvvowedq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163waetsasc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xyflbwnl.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163slshmmbg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pbrqrwsp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zszcnjbk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qudkgbse.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163cwmifwme.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163aearrvay.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mlopydnx.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163fwwamccg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163lxpyrkxx.html

[C08] 闭包
来源：http://www.xuanzx.com/163buedqhjq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163eesbodac.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163edextgrs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mwwwazvn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163httcqmts.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fjghetcd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163sazlhhtp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163invihjip.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163aakaehdo.html

[C09] 递归
来源：http://www.xuanzx.com/163czaaqawy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lbgbvryx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163uinmgjzv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163naqdgfnn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163baehotwr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163swxzoihi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gukwjwme.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ltuuhrfr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ixrmaneh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pkcjibhg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vegcarfk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tsafjpax.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163dtsfppic.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zqbjmsdd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163phrwples.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hznkzgxh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163klzrzhks.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wxtljhmw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163arqoolfs.html

Py:   from module import func
来源：http://www.xuanzx.com/163zfmgkqgg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163klliefwn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163aiijtepf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163pbxxbwma.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lfarwpny.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163opxpbxof.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ioqxluyk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qlcdntma.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wlmfhyug.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163epfxcjup.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163upvtvfoy.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ccpavzsm.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pzqlajut.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163skvneold.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tauaafyb.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lnoutueg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163edfwdwtu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ercecaqa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ruemfbrh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163avuisxdu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163scvaxekh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wxbaucmq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fjftvyuy.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163gvoljmnz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ghvpqnsa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163itwiwbfj.html


<!-- 参考信息 -->