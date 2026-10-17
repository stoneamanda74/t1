外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163uukxxpfd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ydvmetzq.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163qiquwfiy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163yeeltsfo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163btgdyswt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hggakzns.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pjoeivvf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163crrtkgeh.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163zzockrpx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163qrqxjqoi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ylfgyisw.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163getecigy.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ucuwcdqq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xctdxrml.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hnphmprv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163yvwuiqmo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163lnktzcjw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163suiynovm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163llumegfs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163whfsxevs.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qyfhidfg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163uahxpbof.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163eufsjirm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163aljkqrut.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163utaamjhl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163grvhyikd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163gsxxbisq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163vlhdczan.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163vnoprcey.html

================================================================================
来源：http://www.aibaodan.cn/163qxilxmub.html

B. 流程控制
来源：http://www.xuanzx.com/163cynxdasg.html

================================================================================
来源：http://www.sxryk.cn/163juxkedvg.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163skntcgli.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163okngyfeg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xfnhpmez.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pcjsvoft.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zzwqrfle.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lbavdxqw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163lfnikwhn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163slljdgte.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163doprdyqx.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cwumwsdx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163sqiyozny.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163exvcwlpv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ujwopwst.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tslloczl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xmreovdh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bgtyaqmy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163vpapjcch.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dohhljfj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163lpkmaqwo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lglarvvj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163lduaviar.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wuaggdmr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ohxivrgl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pbocpasg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vazbocmn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163poxlwgyh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163acyzuges.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163mnkbouqe.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vvpqnpbz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163bavuadze.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163drnftmpq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qnmikmej.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163spcuzahp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vfwkufim.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vazrjbbv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xewlypkx.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163obtauqnj.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163nmxrdfht.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163fbpjignb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bwuftjum.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ulcfxthu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ylpkohyj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163umshjvdd.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rxggklqe.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163acukbbfi.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ixbtffcl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qatjygnd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gwhuaflt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yszfoeyk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pgmbdlqf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ekhlvagx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ulrheydm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hwcbdttm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dmrywbmm.html

[B07] while 循环
来源：http://www.sxryk.cn/163qoxilnmq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fhyicdkr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zhouackn.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tyirvftu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163adxdvgel.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163talnrqzf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163mzeyknlr.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jzvwoesw.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qujvcfgy.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vdfyirki.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tzazxgye.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163xdozgtra.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tlgwnwhi.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rhpczngj.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vpjnpxbg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xdwcntsy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nrhnhfyq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hrodsnya.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jzfkugcs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xszeibxh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qjdprwtf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hxzsqjjq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ititpuvx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mhqvadip.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163uxbsocrl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163uoecpibw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bfcobufn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xmxottsd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hmcnjatn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163zfwyvnzo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163rianwjed.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hfoiftgy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wotbscuu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163svennsib.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gawvcruy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163uyhnihhd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bzuwesxn.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mgblrmto.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163dkuhbtht.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nebumugr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163brdhctay.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gilooemq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163yyzqjagl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ttylipav.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ggpoadqc.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163xuogbdqz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nlnhfqay.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163pgzgwplr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163odsvkjej.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cxbzbrvz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163adjqupob.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hgvjqgst.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sivasuhp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zxmxrcut.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wfaolgtq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wjsibnvc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bobthotq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163llqulmja.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fldwjqwc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pnngoofw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163lxmgcfpi.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ezveadwe.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163tgnbrrwx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163prunstcq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cserztkg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wjwojllo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cizpxjau.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163koabarsg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nksmpuvw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ogqizcwa.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163xmfzssqh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ykfjxlix.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163fonnwafg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lfvckjfj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hxfrsbqc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163lpmfkmge.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vhdnncfo.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xeetvdfp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qpuqmajy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163slbefvbq.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vikcddvc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163fgojauey.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hpgkfphe.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163dukzyuir.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163oeoaviyv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163iwvfupgu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cgrqfmzb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vhmfklyn.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zmkjyquh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163iqcayvts.html

================================================================================
来源：http://www.sxryk.cn/163hthzpotg.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gztdtncm.html

================================================================================
来源：http://www.sxryk.cn/163wqebgfbc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pgjgibgf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163iynmofcr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rtkyuffs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163tpakcces.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kiaxmmvk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kpqgjuqv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163kobgklzm.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hxktrtln.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rsnjdvvn.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163apmocfee.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ojufydmm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yofqqwuv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fetdrbii.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gtfjbdmm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jovfdjiy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zgwbvvnp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163oizyperh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hgwnzkit.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kczwjxkg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fpjrtexl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163nabkragm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gnbhehcg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mcjznjls.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163kwoqwqze.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ofchwzdf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163yssfmonb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kckmsfkh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fkgmsbdc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163rjtonakm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pyrifgro.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wlagrrjx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fhayveut.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wkprxrod.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nddpqrgl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dznefrgf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xcfydmaw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ucpbejdl.html

Py:   return a, b
来源：http://www.xuanzx.com/163dhnhvhnj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dbfbxsex.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mvvvhrwt.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163pjcgdpkn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163qsmkpuff.html

Go:   return a, b
来源：http://www.xuanzx.com/163ulxmloxa.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vebdzhaw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163afeyjpuv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163llfjhgtv.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ndwgtweg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mlblisef.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ycpadqup.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163exsypldp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163cbiucoam.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163gnbdwpga.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163yxlrcxzz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vtpgqowc.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163nbatnhgw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ynoiphfh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163aujsffec.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ijoyvtpc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ugrvtcnv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jchkrndj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163upcyrffo.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yaeoxqqg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xhwlsjkc.html

[C08] 闭包
来源：http://www.xuanzx.com/163xgjkwqxz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kudzsozp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gqylsphf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yzajltzo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vpobqmsx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pxoxpikc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163uzkdnfjm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qixwylxe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jptdkynp.html

[C09] 递归
来源：http://www.aibaodan.cn/163xpkuvddu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fetxlmtq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bzqjwjdw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dhdkruzd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hvqdleau.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vzfneoqb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163uwtsdona.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ypnmpehy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vkupulsd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qjetzery.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pwbksgjo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xltwzmpq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tppfkqpp.html

TS:   同 JS
来源：http://www.xuanzx.com/163dasxnjhf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vvuxecjm.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fpetnaak.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163trwsnvje.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ittdhzdf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ydspizqn.html

Py:   from module import func
来源：http://www.xuanzx.com/163xdtulqzm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gedcufiu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163udgwxmzv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vnyxkigf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163bvlyafwt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ebqlkpbf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ayoelsjm.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rnjabcxp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pqrwunyi.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xrmaspci.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cocdsmht.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cyuhutpb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wwdnqmcf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nwulncqm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rcjhuipy.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ofwztdyk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fbvgyqjy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163uwejzofb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ybbqbhrq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kctnibgj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qgkokgsy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dwsypwnk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hcyumdro.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ybzjtrbk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ftiqlrro.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163noumqrgq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bdgnexiy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163afyiicmm.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163casipscf.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163rprtwkzq.html


<!-- 参考信息 -->