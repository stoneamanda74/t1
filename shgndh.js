外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ridpdnyg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163iterjdzx.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163yvztkncu.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bzkcsuyy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ghdbkfcl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ezuljqsz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kxmslqzs.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ibioldgh.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163pxkfhjfp.html

Py:   len(s)
来源：http://www.xuanzx.com/163lcvybpws.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163vkgarwle.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163iuatgqya.html

TS:   s.length
来源：http://www.aibaodan.cn/163cezdaxkr.html

Java: s.length()
来源：http://www.sxryk.cn/163mqkgzdnx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163bdwbddjf.html

Ruby: s.length
来源：http://www.sxryk.cn/163ujnccbym.html

C#:   s.Length
来源：http://www.sxryk.cn/163lcrprnzt.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hpamvkxz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ttvmdgtm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163lbglfsdv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163elotywtq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ugbxqszw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ntrdknwx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163pgmmwzqe.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163xipllhgu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163hiuarxce.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163yaxfsqmf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163qbybzqin.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163djwecruy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ydcmyctq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163lbbbagqg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qxmrbnxu.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163zbkhgrap.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163uvpgtfzh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163zpxbyqlo.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163wtninvmr.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xkxcltvt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163sarehkss.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hpspekoq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ndtamvct.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163nmsfenky.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163iunjokdr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163laletqqs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163lwztqifz.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163gxmxrkge.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163fdictvan.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vkjbvdtl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163lvokwksj.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163thndmxnz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163bexnofuy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wrxanrnt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163nciebjyv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hymmgcam.html

================================================================================
来源：http://www.sxryk.cn/163olmixrcr.html

B. 流程控制
来源：http://www.aibaodan.cn/163xttyprvj.html

================================================================================
来源：http://www.aibaodan.cn/163sajkslfz.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163nvwatwkw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tfkypiss.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163cyunibkk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nunsnrrl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eyomsdvu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pagdwjma.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ltulorid.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wwqmhisq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163icoqbzze.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163yzqdcvzn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163zakwnqoz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163pwhapkyr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163exqnhcmq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ntikaodx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ocvjpiat.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163qalzxizr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tylxpivy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mljvgavt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163nvbliokb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fxgpounb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163mrqvbrth.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gpqvwgwk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mkbprjxe.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rauaqgsm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163hlvojvzr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163filjjwaa.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163wzlsvusb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163exhodkgr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163thvwccfd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163avhlikbq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dmejjyzw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kpxdznye.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163nzmuuxfc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wkqxtnul.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163xmptycgg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jtijjnbh.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163tpvfzqmv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163lviufhrz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163pmupdxyn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vpirzlzo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lgependc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163fnzumonv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163tzlwqkgc.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ehmmqfvw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163iduayxpq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vipruvfo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163vuedwwjb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wxrzponj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rvwltmyt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163udqjuuuf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163hpzkdqmb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163cmwcvbvg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163idibvkwx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mkjybzie.html

[B07] while 循环
来源：http://www.xuanzx.com/163zjspamhh.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163yohpsknl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163xiwvambh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163auicewqc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163omsupjvr.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163igjpukmt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hkxyelxu.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163xlcnrlbc.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xzzhxoxf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hfqbqqhp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jkviaepw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163rnezwknz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kuoblfcy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ikgxwwxa.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xwjhirsu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163njalzpam.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rvgxfrwl.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tdeiyblr.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163iekickfs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nymqxjqv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zklhajnk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163knyiopyh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ccnfgxzo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xdmfvrjf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163cdipqhre.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pldjmycz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gsujhjyv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ljmrgoqi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cptflnqg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163qwlgqusb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jbwufgpw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163pwhpzkjr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vruojtud.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wzimftfc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163oxbjrczr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163utshnrpe.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gmdunwbc.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163isnxegkv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xuytskha.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bijbnwee.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bpfjclmm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ttfrtrji.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163amwhqgoz.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nqiaffjz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jdeespxz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vsqpydnk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zzvkfcro.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jqjfzpfn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bppumhgh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jygpwwct.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jwbavjkt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163fgelkjqv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gffhvbfu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163tjwkashp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fyufrhpu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qatdupsy.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cgjxwhnd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rexqvkuf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dcmsrobz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163frkmxjgu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ivpvuckt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qeiginel.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yptczpjg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163yqefsjos.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tpfhqjqb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163wnszkpmt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sagmoqlg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kputwkwt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163bfmmltno.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xzhwbpjz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163tnqlrfkv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xamwdpak.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ffkxotoq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dpkxwble.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163hzslruun.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163inmaudgl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vpakeveu.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pbjwaxmi.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ajakbgfs.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cvhfejdh.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163lwdnbuwe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qpzzxtmc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xehccafs.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163agkihhlv.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vygmvpdr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163keqlqfwa.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163oocgqzzs.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163junzwbjg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wmcrzaui.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163cogtajhc.html

================================================================================
来源：http://www.xuanzx.com/163kppjovvl.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sdnyeovv.html

================================================================================
来源：http://www.xuanzx.com/163xmyptxlt.html

[C01] 定义函数
来源：http://www.xuanzx.com/163sjmtprgb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rseqntae.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163awvrgrej.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163tvfhnyfb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ioacxsle.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tsylbvho.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xwfshsts.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163tzmtxkpi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wkpbzpmw.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wsyqcsez.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lrmgvaqw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163iuqceiou.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jihiojxv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163nkeaoxac.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163bxdpgopf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163whldwqvx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ithxtjzq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163vurackuj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jpaihsmw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163bxorbwiw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163udgathdk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163areoedej.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yaqnjdre.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ontkwbut.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163fvutnfkb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fqpvoaku.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163oefhnrln.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vhjrifxg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163cvlpbesr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fapwwziu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cnzcjaho.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163colbdpil.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mpkeuvik.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163prqhjoxq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lkmfzyis.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pupnqtvi.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ykqlezfe.html

Py:   return a, b
来源：http://www.aibaodan.cn/163txsfvpwj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xtulprlx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mmkrodff.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163wqnefdak.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dxnmweap.html

Go:   return a, b
来源：http://www.sxryk.cn/163mdptvrld.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qgpjjxze.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lrupmkdk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hzgsqalf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wksaksia.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163csjunqjm.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fzkxihby.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lpxlfcwn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zqgrmlvv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ljpntnrh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163prpioihn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163uisgkzye.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ucffszqp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163onhisncz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163pfevlhky.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qioaxqts.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163qfsgcluy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163wfnrrwuw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bcrqaubm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vhbfeexa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jswusupy.html

[C08] 闭包
来源：http://www.sxryk.cn/163qeclqvqo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tiqsvzwk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163yxxtiqit.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ogezulos.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uqlplgyh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xedibfsk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zkjmezkf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ncuxprma.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ekskppds.html

[C09] 递归
来源：http://www.xuanzx.com/163rrdzmvhj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ndiyygur.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rayasuiy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163egadpreb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fczehgga.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ddonfbys.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nhrshpcx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fgjrvmww.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xkcwxavw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ykddtexx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163mpijipzy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163iizxvvvg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vbtsnbat.html

TS:   同 JS
来源：http://www.sxryk.cn/163txfksbke.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vjatvoxo.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gsyezbel.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yxzdjvlr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ylvhcufr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163cmcdziye.html

Py:   from module import func
来源：http://www.sxryk.cn/163dagidbfa.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dcmiqwqi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hwhgspbu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163khqhxats.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mhajhsfn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163unrrqjwl.html


<!-- 参考信息 -->