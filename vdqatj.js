外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163xwidixml.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wrfpbnfo.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zwfhcmqh.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163tmchghsm.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jjbpnexe.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163uqqkmoup.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163gcwszllk.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163olxbhwzk.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163buieskub.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163rqteqxqj.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163cyjrhggw.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ekiweelc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163vnojtdbj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163chtuzarf.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163nndinqhc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163vyhggdvq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163mhozhrqa.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163bqlzcgin.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163iczwmqnt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ngmpegzy.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mhpnilke.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ewzhsuot.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qbkelrme.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163mdscmago.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163utpusjqu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163isdbwjmi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cznyaxia.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163xzqzdjsz.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163bqdohzwp.html

Py:   len(s)
来源：http://www.xuanzx.com/163gtdzcvji.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163anazehnw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163viyrqanc.html

TS:   s.length
来源：http://www.xuanzx.com/163qwyjufth.html

Java: s.length()
来源：http://www.sxryk.cn/163yrjvotfj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163obhnntds.html

Ruby: s.length
来源：http://www.aibaodan.cn/163tpzxzyye.html

C#:   s.Length
来源：http://www.xuanzx.com/163uxujpczr.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163pytqbtga.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163amzaezmn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163hrjzvgyn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rjwhxwzr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ovbiajsf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sadmtwuw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163krrpmihv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163bnnubzld.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163wxsyvnsj.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163vdochuvs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163nvrbpkrj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163waikkorc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163btrgohpm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jkzmaslm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163scfzroua.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gffkbtjk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163mxhemlui.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163dyblnuqf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rxythvqo.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163zeqwwyng.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xpntilxq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gugbvwgd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mpwpzgvs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163vipzafyy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lbwyqchw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pnmcinjk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163azrfepkl.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163doninagi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bnkdmxsu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ngpdshib.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163elknqmbo.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163bartzjhg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163fdebgpfh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vhsccklz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163dtsrqqyx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iaroemhz.html

================================================================================
来源：http://www.xuanzx.com/163thvsxgrq.html

B. 流程控制
来源：http://www.sxryk.cn/163tupenekz.html

================================================================================
来源：http://www.aibaodan.cn/163xiumisfw.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163cttikfcw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163vcdbafrt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163lglhmzcr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qvuzxoww.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ufrkfkro.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gfqnpvju.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163bnbyyytm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163yrcpuibi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xlnqabuz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xmklcspq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163iwrcqfpn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163byeoigvg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ldpsbkxj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kntbnmpz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tixljxrq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163spgmofgt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ferfipvq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163omducqhi.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163uujzmrcd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bjenadyi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ibcnfdoh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hfkwacvw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gsdhekdg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163vuepwdgv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163lzqzoewh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163txtwikgz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cuzpwiol.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163nlyuhpke.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163txlsjnyk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163lygnvmpy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tdabnytm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yvdofbkx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ouqtxooe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ulsaiqvc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163lxzktven.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163cowoetct.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163clqjivmw.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163tfwqbtmd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kllunyqt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jbgtggww.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ubhqqvyp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163hsadqerq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163iliuuiqi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163youwbzdw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163sukuembc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163cvprbhaq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ogxvggqi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ktaxreep.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163snsqdpbw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xdawqbwq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163sowtyyzw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mmwrynoa.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163shshzpcx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xatukies.html

[B07] while 循环
来源：http://www.aibaodan.cn/163mhxsumio.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yiumdrkl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kalrntqt.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nysqaiyr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163djdonxyq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vfbfpoma.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mwcnbmwt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163luyrvozb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vvjkrfbi.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qcgrshpo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163hfchozkd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163fejrxcqk.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dyejncxa.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163poqmpbcq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dutzcqqp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ikmhlffd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163butzgmjs.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pqozlizo.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nhiqzmzz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163wcozdval.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nqawlzjl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hhqxsfli.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hmmfgrmc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ectciovx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wmcgxuez.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gtglkcni.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rwjborhe.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gobpjwwv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xnqgxcso.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163pmrakksz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163fqjkmwqs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kxbhqsge.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163pcgvqnbe.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cluvbkqr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163fhggyhut.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163zcsdicdp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hugnznek.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163iixldqur.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fpwexpnx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fmjvyglx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xdzltcst.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ulzojjou.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jijyxohj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163eeepoqjg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lxjchknr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wdfsbbun.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hmqkirno.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ybmwnsbv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hvlsnxlr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bgxstsvg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pmexjgdv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tzycaufd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mammvttx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163anrfxpmo.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163tsnwnpgq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mwbcwaqz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rxtjavjp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163exhxezbc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nhhdxons.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163dejrnhcf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163fkxbwzgv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163colvbgou.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163bpexfphk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xccpgykp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163qsrtrfpg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163djywzbyi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kitbkzkx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ecrtcfnr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wmqbixzr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163pqrefxbj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xahpvngv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gdywglac.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tmlauizs.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163felvjklj.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163yiticlxz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163keyysoyj.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ncjeqmgm.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gbqchhdv.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rejjbwsq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qskwezrd.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ruzuyoqs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kxzprdod.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163jajmdedl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xlokpebz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163tapeswrn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163uctfyzkx.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ffuerhlp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hyxnfjzt.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kfskcpjm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zejvaruu.html

================================================================================
来源：http://www.sxryk.cn/163xldmmdze.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wlvpzhak.html

================================================================================
来源：http://www.xuanzx.com/163xqfgulap.html

[C01] 定义函数
来源：http://www.sxryk.cn/163tmtskezb.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163juzpetdq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ikhnovid.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163nlpawhyc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hmjrnpkt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bbfehyng.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163fndrsnqe.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vneacxkx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ffqixsgq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ybpjxlpu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ykvunyyt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hhhnzrxi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163bcawtjiu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fdglwtrm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vofuakbg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163caeyftey.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vnmsgqsv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163skauojzf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163odgsuaat.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163josvieiu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ujlxwyru.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qjaazmrm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tbgpajyy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ahweybew.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163uojdyrzl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163eitodovo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163svhskqrp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163hoajnfgu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163agdvpptp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zixftfqc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163moittkdb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163oyiwsdpn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ldtksjew.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163avmxyntm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bmucilrp.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ohupohls.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163fmfnsuwj.html

Py:   return a, b
来源：http://www.sxryk.cn/163qualziky.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wyvrbfto.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163bfjruohk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tmptrdwa.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mzefqelv.html

Go:   return a, b
来源：http://www.sxryk.cn/163rvcirwev.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163cyyzxjxv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163nxwxqqqf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rpovyrjb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lzabranp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163eeoqjqfl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pfcysqis.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kakunozn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163raplymcl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163owjdrdoa.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163osbadjsq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163alwhycrj.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bhycstfk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ervotdoz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163uzosajdb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163idbqieuy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ptyknpka.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tucoypgp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xuuwiudy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rslsryem.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163umkjxuyo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163clyfrdbq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163fnntkdmc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ekdfryzg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sgpvldwo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ltnmvhwy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163zizeqsjs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zcutwelj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ctdkggbq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lvddeurt.html

[C09] 递归
来源：http://www.aibaodan.cn/163ixiyccyp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xbifqsfm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163opiutsua.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mhwrmxhk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tyeearcb.html


<!-- 参考信息 -->