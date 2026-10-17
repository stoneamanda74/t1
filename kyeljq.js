外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wznaxoup.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163umvcuvdt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vxyjodqf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zbyoikde.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ogeergmx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163yabwaplo.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163vjowyrxd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ifkzyhma.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163huroblwb.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163rluyevul.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ziqyquev.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ksadvrvx.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163fxowlikp.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163iqhwlqge.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163kiyrnuhs.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163whnxsyas.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163gvuogdxl.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jthjjixv.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ezqhmdnt.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163znpvztad.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hvwgufbc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163dkpsnxtl.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163yfojggfe.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163erxilqzd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163xqmdrfei.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163zmqdukdk.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yjmxityz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163txpouatn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163vuwftlgh.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163rrcxeumh.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163rgkaeokw.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163njhwamsv.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163nuhqzxdm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sbotvdvj.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hwsygytw.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163sbskrncg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163daeyzsys.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163udrxinkb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dmzbzxim.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163qdgkgpob.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163xiaponiw.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xruapqbd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163gjnnkbzx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163znylcxzg.html

TS:   s.length
来源：http://www.xuanzx.com/163ewafxeej.html

Java: s.length()
来源：http://www.sxryk.cn/163zeoibdgq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163prakjnlv.html

Ruby: s.length
来源：http://www.xuanzx.com/163durcyrul.html

C#:   s.Length
来源：http://www.sxryk.cn/163rxfyzbap.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163bfkssrar.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163vddrfmqr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163tawxjoyb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uvtmfjcd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fdhnzdqw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163btytzsvp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163mdeuzddw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163xdruhrjt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163eobkzhns.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zhpgprog.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163lfuxaxgy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163jnjbemsq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163yketucli.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163cnprqdtt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163oqtrlkje.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xqepacrv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ghqcaxpk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ozrpodjk.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163eegzzhjd.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ubrtnlag.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163nhyyding.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fqmndcqm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ifwhpstp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163yhryuapi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163deuoirpx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163fhjjjdtt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nbkqwgre.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ytornwjs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163fwysigmj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163sjiciolp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ttqhsnev.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163qhbmokvu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163jtdtczpu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qrbytqqu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ermduiea.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kkmdoegc.html

================================================================================
来源：http://www.aibaodan.cn/163uaezejke.html

B. 流程控制
来源：http://www.sxryk.cn/163wyxdlsrf.html

================================================================================
来源：http://www.aibaodan.cn/163njjqgdvh.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163sgirbpuj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kcpxpjui.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tkwnacwk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gtniereq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cxxmpmov.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fpabygmj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163yirpqycc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163umrldkgv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kupiwxka.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163iqlkjapr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163olwibhrn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163bxstuzpt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vsibaebf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gtmhkqsw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gaeyqvrd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tuukcdeq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163avfcvgfg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vgfkzagb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ctjbaqka.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ohtjylbf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163evyavmwl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vmoezrmx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163furwnobg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163esdtttpc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163pmqkvvnb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kvqzetza.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nptziivt.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kabgaemi.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nlpysbur.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163sotapsks.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hgjbithk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ryoolsuv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ficoqupd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163nppygoiw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163trekeuol.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rqguloti.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ktqfcitk.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163cwoqnqgg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163qnrumnpf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nfuorijc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rwabaxob.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jopqktcy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qmeuoexq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163redpwxhv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ptqproxk.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163votuvdwq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163zjcydjui.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rwmeojgh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jvneejce.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tmjmtdze.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163opqoeehi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pmvcmbzt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wwfclina.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dflpenwb.html

[B07] while 循环
来源：http://www.sxryk.cn/163igshxdtv.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163rhejrseg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ajvosyoh.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163irohoahf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dfgvotkn.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jdlldsqs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ykasbegd.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163nvgxafof.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163npwcjecc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163rvnfbwlj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163uzjwoadf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163cauqxqyi.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xoudibph.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ukwuzzuc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163asqhkuvo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163etwfqscl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163uhvekujo.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nmiqiosy.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tkertrit.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jstehbwl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163aiapftzj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lejfwpvd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lbwccgql.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163khqpvrqk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rzjrhgva.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163eishivup.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ogkycrhc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rgovgbxv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163toacmvov.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163khrbbddz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163uhsrxxuy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163odjgrdff.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xeldfzvs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163xkkwondq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163iujshcje.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jofwmjew.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qkhjvrzp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fvswifkj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163xhcbwvxw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lrogiexv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rhezsmcm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xnxrkfup.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163nilhdnud.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wwylhciw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163foqinpct.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mosrrrhb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163eyfxajfd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163uujvnfnb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zwspxkuc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163askgkxjr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dmcfblgk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163efnvgvzz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163orzkferu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163lirckzei.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163cgqsqboc.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kiyxzmth.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163trdwryac.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eaygesiu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163flnuyywf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nhljriyb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163euuzsitg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163bqhqclwz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mkqavnwy.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bixoehxm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ypuhsgav.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163bdpkvsyq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mvpdknyt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163asjdourf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dboviijn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163rrqzzcur.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163fiopbiqs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163kmhilaqi.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fnqbyywm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zojkdnbi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uzbsgxuw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fhtjhqha.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wuyincxx.html

Java: a && b || !c
来源：http://www.sxryk.cn/163edmwnpek.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163uanxsgrl.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ahpwfvvc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jdiccgpl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rzqiqnzf.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hotjdxqr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163inpjloga.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163cmvutdrl.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ulzkflgn.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nfgejcjr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zfmytkyj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163owzuowuf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jtfmmofc.html

================================================================================
来源：http://www.xuanzx.com/163tuniorht.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wliaavlk.html

================================================================================
来源：http://www.sxryk.cn/163gzkhpzog.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bmhblssf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163oigkkxml.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163alrzsejg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163tseizuoa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vdwxfykf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uzjzmoei.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pjsovfjg.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aykziewx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vwubcvkg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fkmevbgd.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163byntdahe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163sqiflmoa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163abyndmwt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163igwizzwc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yntnukev.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ggcxscla.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163cegxqxdb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rewqnlom.html

[C03] 可变参数
来源：http://www.xuanzx.com/163sgwnojqz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163unkbvgms.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163idjrbrrf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ouihohqe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163weggbsjh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hmpvzahn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pszklnjx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nnsqnzqa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hviycubx.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vgkspabh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163mlqlespw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zdbgsryn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163rlvirbuk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tpgnunmf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163eecqejzw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wssvdrlb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163blcponwu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bwduyskh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163sjgogplt.html

Py:   return a, b
来源：http://www.sxryk.cn/163qcythgjg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163igofwvld.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163uzemgewm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hlkjomja.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163orrldehq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163dljetqrk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mlwtgslj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163nupobasi.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vfjdkzgh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163kqxrwisk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163cnjevzet.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163igkzvnpp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163eiiedwwz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uvimtjsh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163anbpquum.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hezwimjr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163pyvjieqe.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ckeoctod.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jnpjfzcu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163hhvqaaxl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163tyotvmuq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163caicflmn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163auyjngei.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163nbtzdhzz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163oadpupgv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qjsoywmz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163riyosmun.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vgptoizx.html


<!-- 参考信息 -->