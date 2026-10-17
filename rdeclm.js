外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ylshygtx.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163edzugrge.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vzliaywv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163dxmdirnc.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kopdarji.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163dkjrspsk.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163cxddqmbs.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ypumivjt.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163mglztshr.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163nesfjjop.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163zgstgrqy.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163gpyqhgpn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163rqamcold.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163bebbqqwh.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163bohcmjrr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163vqbsyrxs.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163njckqcau.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zxjynlxv.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163byqqgvun.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163fambtmci.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163lunkqcbk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bsbcreta.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hhgukwxw.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uhzniqyg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ieivcisn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fmxklkqa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ahovpykb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163cxigdjdh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163tmdcojen.html

Py:   len(s)
来源：http://www.sxryk.cn/163jyiyigoo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163wubnaaij.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163kegeqkwq.html

TS:   s.length
来源：http://www.xuanzx.com/163cebcecjj.html

Java: s.length()
来源：http://www.xuanzx.com/163tmocehoe.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163bwojurhv.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qnxqtxwu.html

C#:   s.Length
来源：http://www.xuanzx.com/163vogwddub.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163yqpxwfkh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163beixdifp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163hthhvfyo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ygtxjgcn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ywormlas.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ulbrksvq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163thypkggv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wylchltn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dufaqejw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163qocbmzyj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163irojilpp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163bhalojht.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lkhohojf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163oqbeotmg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163vlkucoqu.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163tlblgtsv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163kqhncgmn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163rhhnoncc.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163rveutdjg.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kompesyq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163dntyabqn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163foqsnmxb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eittvaav.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163zvsoldeh.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ohdovnos.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163qzjvfctp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yhemvpov.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ztggvivw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163pkhxuson.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163igtlzsqc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163uilirxnd.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qghdxnhk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163xnirngqi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163euqdaweh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163tdvfhbsx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iwzajtzg.html

================================================================================
来源：http://www.xuanzx.com/163fwuzwrtn.html

B. 流程控制
来源：http://www.aibaodan.cn/163aztmyika.html

================================================================================
来源：http://www.xuanzx.com/163yldwbirh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163jkpahqbw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163qzxgwrwz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163odaeiifj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ilevbwzc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zsyfsyeu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cmczlcok.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163khpufiop.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163zpozilyd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zwtnmpbn.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ksxmjgeb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163keklwmug.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hymtgpdn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aoevqxjx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hndolbsa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uwslxfpd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ezyogghs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163wfbdgyrr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lterafhq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ijzgitho.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163klbgdept.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yrizhihx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nolksbgi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ahphnpjm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163gtypqlyq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vztkftsh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xotepobg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163rmidcqek.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163bpxejvwc.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163oqkvoyvb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163icjwwsnd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ptpuegea.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gvmjjdki.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jdpewcti.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bjuogorn.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163psfqguga.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163waeazsjk.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ikpnaqit.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hlolpjqr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jrpgruet.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nmzxbppt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wedoomqr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163oofjenog.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163auxfddnw.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mqtnngly.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bertvmth.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zdblbfql.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163esuikqab.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rxvbkrhm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sjafsrtv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hiqtpgdj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163xnolqiye.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163tiirhkpt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dewykxqr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163rkpghcpd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163wnsbhmlm.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163cwfhuwkx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pgmdwnwe.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cbupfupt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mcmehqnz.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163umyjluep.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163scgguqma.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163iakvgyjb.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pgcgrsyy.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163unecvjzs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zatkpnxp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163swjuxvhp.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mpvayxrv.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yhhftqde.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zscdqzqh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163tsjmyadu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163isbridpv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163urwqwigk.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163udfsrplp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163sqsmlyve.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163exlocsiw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nkrrpeas.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zntvijrp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ecrreasj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163edamxdce.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zceusuil.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lihsvaqk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163nmjhcqbr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qqdaqukf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163uyjrkmsf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163fdfsqtru.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cdmceonv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163dkcfdwsf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hbwzhcug.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xtrquqbh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cvcpmfuk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163cigjriob.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163pqvzajlg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163rekbeizv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nwccdgfe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163glfqjpfq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sidprxim.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163oiqufvgf.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yfiqiawq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163qiiwefmr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163yqauiklq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163gmoyajfa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163oftulmcf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dtdqzegy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sbbzozpy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ntbtxewa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163themjbxi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163lfskhfwx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rjjruqcf.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163njbxtnwq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gidbfsvu.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zrrjccke.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mwlkovvk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vyssjzjy.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163fxeoiygd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163arnhdmkm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qsyrdlsq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ienehqre.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qlbuatcn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163reaxhbxk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163wscmqoqu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jheemqpe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lhpqoduq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163enwdcuak.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163faoxxpjc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163rbospulj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wiqutfta.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163skateagc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tkldcmvj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163abfnrxkg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kxfunvxq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163tjorkrju.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dgizatcw.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163jrshyyog.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hwntbqkg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163euoboovm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cprkjbvm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vihateep.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cpnumtak.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bnpahdwd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xvegejhz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163iozeaayg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163txqfudyd.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163relvbvka.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163oswvomfw.html

================================================================================
来源：http://www.sxryk.cn/163ymazjfgq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nwglktgg.html

================================================================================
来源：http://www.aibaodan.cn/163xvazgwmz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rbqphxcr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xlwaruib.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nuqyzqwe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lsvhppzf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kvjtfqqu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uighmvtc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163giwpzdns.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hhwnkvws.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xdiwwtdj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tqjaeotk.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hudvkqvl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hysjniiq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hrmkgiqt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dqzlydjt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qcpjstnb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163svfqjdzb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nsfzlkww.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rvbqtrbk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163phlcxuxc.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bdhmdwyy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163copklfrw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nyqnfkcj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jnwwwtfb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yxoarcuh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xumqczmh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qogvgxrd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163xgyakawu.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163cdwwtrad.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ypytwoji.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gqyfonta.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ulimdjkc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ympsgytq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ydjwzbwt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ieeepjuz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kxxghmkz.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163frhccqlr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vwufbowh.html

Py:   return a, b
来源：http://www.xuanzx.com/163sadlfwsw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163czvdnsal.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rrbfsyie.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qhwgbuug.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iuyvlmzq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163krpuzgra.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wswgsuwn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cwpivlfr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vbmitrgr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rojoouiz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jizpsajh.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ovzpnilf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qmvbhypy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hczxjwfs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163htyofdny.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163teylrdxr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vdiqcsfe.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163peigzrwu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163deladhjf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yljnjzqh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163giuilazh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wertxjrp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163shcqdwev.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163yqonhdyr.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163alwzppvn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rwgjhlwz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kfedgets.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163xcvlhcqu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qykovris.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rvwastxk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uvksakcy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163bwrtiidw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mxfbxesc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vnbmctqk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xjriohgh.html

[C09] 递归
来源：http://www.xuanzx.com/163ccbyvhwk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163noqpmhuz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wxddjtwo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cskxwgdl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163paqjawaa.html


<!-- 参考信息 -->