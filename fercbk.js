外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163jnisikrw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163vjsyhwjr.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163npcpesum.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kelifnoz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163yexohort.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wtnaehzw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163tillkaff.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163yhrfyuzq.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163fmtguzgu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ahdguoqu.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163heosylgq.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mrmdqnwf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xdnhoayp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ommgquho.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tpbvctqj.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163dnrbvgmg.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163jnalwuji.html

Py:   len(s)
来源：http://www.xuanzx.com/163ylgponyk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ucogckim.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163bjfbbzxw.html

TS:   s.length
来源：http://www.sxryk.cn/163mmghkbjl.html

Java: s.length()
来源：http://www.aibaodan.cn/163syckblkg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163uetzcndc.html

Ruby: s.length
来源：http://www.xuanzx.com/163uwyewfxq.html

C#:   s.Length
来源：http://www.aibaodan.cn/163oxttfpbn.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xdhtcgxf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wlmpyekx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ejpavdtc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163sdgfaull.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bmkflybs.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gidbcsip.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163oxfvvnxb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163xskmspww.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163wajdebwh.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kdqmahrx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ywkriwyg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163tnkjapii.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vbvrumhw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nuzoynzh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163eewixjdu.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163gpomfikx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gskhtqfm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163arkrcido.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163pxvpfwkh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163jdxvqysb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163jcevxnwy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nqghqwhs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ezricgay.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ofacjocf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rmudsdqt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163kvrlctcc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163mrwsbpip.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163mmrdalna.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ghazexto.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163xegssffi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163abvehkrk.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163vbqyjubi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wlmwdihb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ufgkstct.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163luougxyc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fstpwzyj.html

================================================================================
来源：http://www.aibaodan.cn/163oxexajwr.html

B. 流程控制
来源：http://www.aibaodan.cn/163uorzclhb.html

================================================================================
来源：http://www.xuanzx.com/163kacfesoo.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163umebeubk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163hvjpovap.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163apadeyzm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ujwonxag.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fltdxfak.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dsxxmzky.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163igyqffgv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ohmrofpt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wcjrmpfi.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163aiggqaml.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163sfufdpyo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163unkbrslj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163stysfvqz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jvxielnp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kajemjqa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163lkgriecp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163hicszvqg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zebqozim.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163clthefgz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163rtzsukwn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163qcbprvmk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ekstwyiv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163daegtpvh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ymvqbqtr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163dppjreyx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163cxviozbt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163lpmgcqom.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wvdctbmq.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xprkhuvy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ptwiwixo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xyzombll.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163khsygmgf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163dtlqlqqs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163sqpdnhut.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ojcrnopi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qxczkssh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dibksgxg.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ghzripsw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163atcjicnc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ccvyzogk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163krpwtvrv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nrjszfqn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163owinmtdn.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pdhhaths.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163yuzbptmh.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163skyjetni.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163oxdgjcru.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163owvdydli.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wysmujgl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tqttnqbi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vhjnqexo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163oowigtzo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163byunivvk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vghghjcr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163idlpvgzf.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163dqtnsuvv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163lmfbghae.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rtrprnat.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zjdhffyd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163falgdqdl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163svbiofzq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163femokjhx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zmjxbsbg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163tvkhzppg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163boeytqmr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bftzgbwj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163iazmtzxn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pnawepvc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ftahqmeh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163jvusjtgj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rapdgwir.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163plvpdgwb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163pgokqqje.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pokxlfgg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163gmqxsmua.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pexjvepq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oewdqeck.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163asmplsfc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fmorjwyz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jdsvlvjo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nklpmmov.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ksbbojwc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163olcbfifo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tkafcdqv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gyztykwm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163idxxgkgp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jhscufqh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ddzbulkr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gpcujtde.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ovrmzqep.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163yqbjwvdl.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ggewqnto.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163byxlhtft.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rtpenlkv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bauybrtd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163sflqauoo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ryvpbmgb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163bkdzgmil.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ihiqwrjj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mkdmzujo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163irumdbhe.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163mbaxpafj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pflxwatn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uwkfyytj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wiozwwgh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mwgcaldm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163rbfhhbix.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qcexntrp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jhfjlqlj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163almupkyt.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163sxxjcrnu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vidsmuef.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ayucwafv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163cmtvnvwm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163sakjrojd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wklcuflt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163luuzpgbu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ofizbfjv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jetdqiex.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ikuqslnu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163piwltlxy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163eempsjkq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vmxzgmxj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ltqpvpfe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163merkvwai.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qwrfkhdg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qquncmph.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163kplrqlpy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163bvmrvttl.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jklgsmda.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163bqwqjxzf.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ozfidxat.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zgokgzva.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mjkspywg.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163iylyuxdv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tzapmcmq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163uxbyfdfm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xvovlnpq.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163zmobnhfq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zhqpmmse.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163fflmqqvj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163yeufbddt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zbjphadp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163uucwyacr.html

================================================================================
来源：http://www.sxryk.cn/163ywuqaxsr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xmexoiiz.html

================================================================================
来源：http://www.aibaodan.cn/163xhntgyfj.html

[C01] 定义函数
来源：http://www.xuanzx.com/163asfjxscx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ligpaldg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cpsshylc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gezervos.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qbgrpgqn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163imqrvrrn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ohfakvma.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jppoyxtg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hftxwjql.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xcvhzopx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cxzvgyxu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163pubjflgb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163avcmzjhs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rlcdffzc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ewnurwut.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163gqrafgvm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rxuzxack.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ezqrwwjv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163yjkoysnz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163iruadbde.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163zgkdtmmq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vpcqoysb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nzeposhv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163medszoya.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nlvpyoce.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vewfimkp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163rbsgyhjl.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163hmszpodv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qoijtbid.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163anfdngvu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pevxocxb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hthydfqf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xfjmxstq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163znpoxkiv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ejrnqqzd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hwonfugt.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cgebcyin.html

Py:   return a, b
来源：http://www.sxryk.cn/163zldbywjm.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hgbdnlvy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rqlahana.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163enfrlqzn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163mnybrzhh.html

Go:   return a, b
来源：http://www.sxryk.cn/163bieclnqv.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zwhxrvra.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rltqvhva.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163adsrnagd.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163bbdorudx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jkxdgnry.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163nrwzuijl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163mrzkqekf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wcyorqza.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jaocnyxj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gxrnvfjj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bxrwlzcz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gxmkghds.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163slxathxb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qrwmnmuu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ygxavude.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163osxmfptz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163heanuqdi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xwkguqpi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vxcygmxa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rdebumgs.html

[C08] 闭包
来源：http://www.xuanzx.com/163xqpcauej.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qylbdnpe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163cyseeoig.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gflmlaur.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pypcblii.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sfeyrwvy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163odkejoen.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163sbopjgyi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fuortksr.html

[C09] 递归
来源：http://www.xuanzx.com/163cxjwwttx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zwvzsivy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rnhupbty.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dqyjmdxx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163enjaccyf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163dzrzkacj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mzpirrsz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163libgscjf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vwadqdfq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163nkbtifle.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163qmxechlw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yrlczbar.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163noaxvgzs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163agpxhjad.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163zrpxuzss.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ajruqere.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nwlwogvm.html


<!-- 参考信息 -->