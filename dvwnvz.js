外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163lsslihxi.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163cpsynxzu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ufuttflk.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163tksynphq.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163lfavqvnc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163mwalsrpw.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ooksvtzr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163gzuciaxk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163fxrkippf.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163cmfkxjec.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163nhnexfyk.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163vxzflajp.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163muwxadkj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cynzprgv.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163picjqgly.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vmidhphh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163aljknzpr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jijmvsyi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ocbvliea.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163iojeyscb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163jjzyblzd.html

Py:   len(s)
来源：http://www.aibaodan.cn/163udsxdthm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163hqdhvpsv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163zmzwntps.html

TS:   s.length
来源：http://www.sxryk.cn/163jnqyvihu.html

Java: s.length()
来源：http://www.xuanzx.com/163clmtpovg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163hcnqwxyh.html

Ruby: s.length
来源：http://www.sxryk.cn/163hbtrtigg.html

C#:   s.Length
来源：http://www.xuanzx.com/163oefsgnaw.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163uojacgwz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163nxyjhpvp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kaunmpym.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hgshhrvr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ekchwxzr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gssysoop.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ulkcgxhm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163wrwzfcgl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163fantsobd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163jptxwpcs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rknosmoi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163edvptgpq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jjrpshbg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jwpwifpf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ytafgjnt.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ravtqagp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163evbznkod.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lqpiokxn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163gtnfndha.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163zqvzonqg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163syezmtbq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fqevoagf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ojbtccul.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fabjphbq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wnkgnqmy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vbwanbvm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163vtrsvnpt.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qdkknwiv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qtqxeblv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163mrlpiwdh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163grhvxtee.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ztqwpzdx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xsqaqezj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163nnrljgkn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163cwtravvp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163aokgeawi.html

================================================================================
来源：http://www.xuanzx.com/163psvrqsha.html

B. 流程控制
来源：http://www.xuanzx.com/163tetotexc.html

================================================================================
来源：http://www.xuanzx.com/163kqamemma.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ejogzsdx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ivlklxhs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163jjqpvlha.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vvpmznyr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163khmjswjp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xjtwcxoh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163rfogtizo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163shsdfyyq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ftrovyht.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163napkzxak.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tasecvms.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163igykfgka.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wbzxopah.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ptlyqtwe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qvkwayse.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163iykpdvjm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163iopuncpy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iwzigbuc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163mryvcgcp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163qcvcxfad.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163xwwpknrp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163urfzfitl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yazyftnv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gxvjzfei.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163kdmlnxva.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163dfxacoku.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lxishhtg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163tnxokeel.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nvirmwpm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163psbomdkv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lpsmnire.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zbhhhjsu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163buygsfpe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163khwsbuyk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ymbknzxp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163sgqnygio.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163hygbhxwi.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163dizkgonw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163auvbjypk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hmqqpusl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163llmrkrkk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zrzbygfq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163yfpjxdqg.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zqxsuywq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163acpdsscl.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dnamjyev.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ftyghfzi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jwzfkwhj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ncwglgam.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qgixyjuu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163efefarcu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rxqnyqho.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qqazhbbj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163izvjclkn.html

[B07] while 循环
来源：http://www.sxryk.cn/163xapkhzou.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163neblrcdx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ciwoltmf.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kvzvpnfv.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163soyptvcz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fpffezwu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163oosxajfr.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163qzbwgzqa.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163psqlnuyg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cctipgpv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qdljiyds.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163orvztifi.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qufuoqzy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163auskgblt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pyyolstk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ivjddbdf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163quzttqdl.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163enjebvgb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163maxiwfie.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163gghpuphk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ytcewilw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mbfjznzc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tbfjqnot.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aqoualsx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ozagvdmu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nneadhrb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163almcqnyg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bvpfcbvw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nadtckjo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ovtecseb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163jdtsepzn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pjxguxpw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163csjkynpi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ftrrbucg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lzqtwuyf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ckvxlipg.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ggfainzo.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bbdgxboh.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163rhgsvoqr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lvdhinlu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nleuhhtv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163pnobpwvh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jyxsirpa.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163swwhnlrc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lvzzvqrt.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163vtoqxfkd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fxhgyeos.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ynjwywxp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tgwjhalf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rpgdpysu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iacmjssi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kqnlplyh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163uceozsms.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163amkoenlj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163guwinzig.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163tasmvvvu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163scoupiny.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lukudjpc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163boajabkm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xzvvmpok.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jllqtcse.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cnlftunn.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163idaieczz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163cjtgtwrl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zsvhzaet.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163qdbosvge.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qqkhqrtw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163txdlzgfi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163hpfwoknb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bwougusv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fuvudfmp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163umqeffiw.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ndmsywpj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163cntmjtzv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163hkvenfvx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ivxkfako.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jeuvglyf.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ltpiffno.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ginooeih.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163pivffaph.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fbcgcwnu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rbkafiik.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dwerhbba.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xhfyoepw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163qvvhlrrv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xynsjtss.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ncmvpjcz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wxhrwsnz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vgegjuus.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163mkwformu.html

================================================================================
来源：http://www.xuanzx.com/163lpeordkf.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lvaosukt.html

================================================================================
来源：http://www.aibaodan.cn/163ibvcdhqy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wofmlthb.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163glplujzr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tdzxyvwq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jolylnbw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zonilwpo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qqxqorcd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ljiyxrps.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163akhxxhor.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bxlapzot.html

[C02] 默认参数
来源：http://www.sxryk.cn/163lskizptu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pxsbdjsz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dgfbeatj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gjmxfslt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ahrpbnmc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163atfvddld.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163imhvvctk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163umwiqvxv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zladbqbt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rlnjexss.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zjwcsqmk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vufztwoc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ihwlwjnt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nresargq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cyapflfw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163tylrnhjk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fzxoizwc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163pwlhgple.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kncfnugk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jhtiskta.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ghbnqqzx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dozykeaa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hllcxxxe.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hgakqamp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163layuxqig.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163irynyome.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hkxwiehv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rdtylfnz.html

Py:   return a, b
来源：http://www.xuanzx.com/163aziyayyw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163olypxuuf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qgttrxna.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163vjixvhyt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ojgewuvm.html

Go:   return a, b
来源：http://www.aibaodan.cn/163bdrrsbrh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163uzjvwcds.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lxnvwlas.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163shnfdrjz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vbnlcjif.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xrcsctos.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163qcolvkht.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ioxzfchh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163etvsyvan.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163dpzvnokl.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163dlatxlyp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gjwhzhgj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163upvkdlnj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qqkbkiia.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163nfhjnkbx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kwndvlbi.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163asieoxgf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kimacxja.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vnbrerru.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mblfcjjm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qgktcglk.html

[C08] 闭包
来源：http://www.sxryk.cn/163goqmooyt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rrraystr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vgmlxttp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163axolsxdq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zkyfqmca.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163uxcgiodu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163oqylcjuu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ygxixtds.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yswarsgf.html

[C09] 递归
来源：http://www.sxryk.cn/163jwithnxf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163fsfgjfdl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163vtgzvvyr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163abhefbxj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ltulzubw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gbzbpgtn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163vrviniqj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163urlskoej.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nfmlkcla.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163svzdjapj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pornqaor.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163auqbqfiz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pfegvfrp.html


<!-- 参考信息 -->